import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";
import { uploadImage, deleteFile } from "@/lib/uploads";
import { z } from "zod";
import { MAX_FILE_SIZE } from "@/lib/constants";

const pageSchema = z.object({
  pageTitle: z.string().min(1, "Page title is required"),
  badgeText: z.string().optional().nullable(),
  heroTitle: z.string().min(1, "Hero title is required"),
  heroDescription: z.string().min(1, "Hero description is required"),
});

const statSchema = z.object({
  id: z.string().optional(),  
  label: z.string().min(1, "Stat label is required"),
  value: z.string().min(1, "Stat value is required"),
});

const featureSchema = z.object({
  id: z.string().optional(),  
  eyebrow: z.string().optional().nullable(),
  title: z.string().min(1, "Feature title is required"),
  description: z.string().min(1, "Feature description is required"),
  points: z.array(z.string()),
  videoId: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  accent: z.enum(["blue", "slate"]).default("blue"),
  layout: z.enum(["leftText", "rightText", "centerSplit"]).default("leftText"),
});

export async function POST( req: NextRequest, { params }: { params: Promise<{ slug: string }> } ) {
  try {
    const admin = await getAdmin();
    if (!admin) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const { slug } = await params;
    const formData = await req.formData();

    const payload = {
      pageTitle: formData.get("pageTitle") as string,
      badgeText: formData.get("badgeText") as string,
      heroTitle: formData.get("heroTitle") as string,
      heroDescription: formData.get("heroDescription") as string,
    };

    const pageValidation = pageSchema.safeParse(payload);
    if (!pageValidation.success) {
      return NextResponse.json({ success: false, message: pageValidation.error.issues[0].message }, { status: 400 });
    }

    const rawStats = JSON.parse((formData.get("stats") as string) || "[]");
    const rawFeatures = JSON.parse((formData.get("features") as string) || "[]");

    const statsValidation = z.array(statSchema).safeParse(rawStats);
    const featuresValidation = z.array(featureSchema).safeParse(rawFeatures);

    if (!statsValidation.success) {
      return NextResponse.json({ success: false, message: "Invalid stats format" }, { status: 400 });
    }
    if (!featuresValidation.success) {
      return NextResponse.json({ success: false, message: "Invalid features format" }, { status: 400 });
    }

    const existingPage = await prisma.featurePage.findUnique({ where: { slug } });

    // image upload
    let heroImage = existingPage?.heroImage || null;
    const imageFile = formData.get("heroImage") as File | null;

    if (imageFile && imageFile.size > 0 && imageFile.name !== 'undefined') {

      if (imageFile.size > MAX_FILE_SIZE){
        return NextResponse.json({ success: false, message: `Image size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB` }, { status: 400 });
      }

      if (existingPage?.heroImage) {
        await deleteFile(existingPage.heroImage);
      }
      heroImage = await uploadImage(imageFile, `pages/${slug}`);
    }

    const savedPage = await prisma.featurePage.upsert({
      where: { slug },
      update: { ...pageValidation.data, heroImage },
      create: { slug, ...pageValidation.data, heroImage }
    });

    // stats
    const incomingStatIds = statsValidation.data.map(s => s.id).filter(Boolean) as string[];

    await prisma.pageStat.deleteMany({
      where: { pageId: savedPage.id, id: { notIn: incomingStatIds } }
    });

    for (const [index, stat] of statsValidation.data.entries()) {
      const { id, ...statData } = stat;
      if (id) {
        await prisma.pageStat.update({ where: { id }, data: { ...statData, order: index } });
      } else {
        await prisma.pageStat.create({ data: { ...statData, order: index, pageId: savedPage.id } });
      }
    }

    // features
    const incomingFeatureIds = featuresValidation.data.map(f => f.id).filter(Boolean) as string[];

    await prisma.pageFeature.deleteMany({
      where: { pageId: savedPage.id, id: { notIn: incomingFeatureIds } }
    });

    for (const [index, feature] of featuresValidation.data.entries()) {
      const { id, ...featureData } = feature;
      if (id) {
        await prisma.pageFeature.update({ where: { id }, data: { ...featureData, order: index } });
      } else {
        await prisma.pageFeature.create({ data: { ...featureData, order: index, pageId: savedPage.id } });
      }
    }

    return NextResponse.json({ success: true, message: "Page updated successfully" }, { status: 200 });

  } catch {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}