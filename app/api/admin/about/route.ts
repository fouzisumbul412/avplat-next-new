import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";
import { uploadImage, deleteFile } from "@/lib/uploads";

export async function POST(req: NextRequest) {
  try {
    const admin = await getAdmin();
    if (!admin) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    
    const payload = {
      heroTitle: formData.get("heroTitle") as string,
      blueCardTitle: formData.get("blueCardTitle") as string,
      blueCardText: formData.get("blueCardText") as string,
      mainEyebrow: formData.get("mainEyebrow") as string,
      mainTitle: formData.get("mainTitle") as string,
      mainText: formData.get("mainText") as string,
      mainHighlight: formData.get("mainHighlight") as string,
      missionTitle: formData.get("missionTitle") as string,
      missionText: formData.get("missionText") as string,
      visionTitle: formData.get("visionTitle") as string,
      visionText: formData.get("visionText") as string,
      serveEyebrow: formData.get("serveEyebrow") as string,
      serveTitle: formData.get("serveTitle") as string,
      serveText: formData.get("serveText") as string,
      teamTitle: formData.get("teamTitle") as string,
      teamDescription: formData.get("teamDescription") as string,
    };

    const blueCardValuesStr = formData.get("blueCardValues") as string;
    const blueCardValues = blueCardValuesStr ? JSON.parse(blueCardValuesStr) : [];

    const pillarsStr = formData.get("pillars") as string;
    const rawPillars = pillarsStr ? JSON.parse(pillarsStr) : [];

    const teamStr = formData.get("teamMembers") as string;
    const rawTeam = teamStr ? JSON.parse(teamStr) : [];

    const existingContent = await prisma.aboutContent.findUnique({ 
      where: { id: "about_content" },
      include: { teamMembers: true }
    });
    
    let heroImage = existingContent?.heroImage || "";
    const imageFile = formData.get("heroImage") as File | null;

    if (imageFile && imageFile.size > 0 && imageFile.name !== 'undefined') {
      if (existingContent?.heroImage) await deleteFile(existingContent.heroImage);
      heroImage = await uploadImage(imageFile, "about");
    }

    const content = await prisma.aboutContent.upsert({
      where: { id: "about_content" },
      update: { ...payload, blueCardValues, heroImage },
      create: { id: "about_content", ...payload, blueCardValues, heroImage }
    });

    const incomingPillarIds = rawPillars.map((p: any) => p.id).filter(Boolean) as string[];
    await prisma.aboutPillar.deleteMany({ where: { aboutId: content.id, id: { notIn: incomingPillarIds } } });

    for (const [index, pillar] of rawPillars.entries()) {
      const pillarData = { aboutId: content.id, title: pillar.title, description: pillar.description, icon: pillar.icon, order: index };
      if (pillar.id) {
        await prisma.aboutPillar.update({ where: { id: pillar.id }, data: pillarData });
      } else {
        await prisma.aboutPillar.create({ data: pillarData });
      }
    }

    const incomingTeamIds = rawTeam.map((t: any) => t.id).filter(Boolean) as string[];
    
    const existingMembers = existingContent?.teamMembers || [];
    const membersToDelete = existingMembers.filter(m => !incomingTeamIds.includes(m.id));
    for (const m of membersToDelete) {
      if (m.image) await deleteFile(m.image);
    }

    await prisma.aboutTeamMember.deleteMany({ where: { aboutId: content.id, id: { notIn: incomingTeamIds } } });

    for (const [index, member] of rawTeam.entries()) {
      let imageUrl = member.image || "";
      const teamImageFile = formData.get(`teamImage_${index}`) as File | null;

      if (teamImageFile && teamImageFile.size > 0 && teamImageFile.name !== 'undefined') {
        if (member.id) {
           const existing = existingMembers.find(m => m.id === member.id);
           if (existing?.image) await deleteFile(existing.image);
        }
        imageUrl = await uploadImage(teamImageFile, "team");
      }

      const memberData = {
        aboutId: content.id,
        name: member.name,
        role: member.role,
        image: imageUrl,
        order: index
      };

      if (member.id) {
        await prisma.aboutTeamMember.update({ where: { id: member.id }, data: memberData });
      } else {
        await prisma.aboutTeamMember.create({ data: memberData });
      }
    }

    return NextResponse.json({ success: true, message: "About page updated successfully" }, { status: 200 });

  } catch {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}