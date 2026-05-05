import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";
import { uploadVideo, deleteFile } from "@/lib/uploads";
import { z } from "zod";

const homeSchema = z.object({
  titleBlack: z.string().min(1, "Primary title is required"),
  titleBlue: z.string().min(1, "Highlighted title is required"),
  description: z.string().min(1, "Description is required"),
  appStoreUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  playStoreUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
  try {
    const admin = await getAdmin();
    if (!admin) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const payload = {
      titleBlack: formData.get("titleBlack") as string,
      titleBlue: formData.get("titleBlue") as string,
      description: formData.get("description") as string,
      appStoreUrl: formData.get("appStoreUrl") as string,
      playStoreUrl: formData.get("playStoreUrl") as string,
    };

    const validation = homeSchema.safeParse(payload);
    if (!validation.success) {
      return NextResponse.json({ success: false, message: validation.error.issues[0].message }, { status: 400 });
    }

    const existingContent = await prisma.homeContent.findUnique({
      where: { id: "home_content" }
    });

    let videoUrl = existingContent?.videoUrl || "";
    const videoFile = formData.get("video") as File | null;

    if (videoFile && videoFile.size > 0 && videoFile.name !== 'undefined') {
      if (existingContent?.videoUrl) {
        await deleteFile(existingContent.videoUrl);
      }
      videoUrl = await uploadVideo(videoFile, "home");
    }

    const content = await prisma.homeContent.upsert({
      where: { id: "home_content" },
      update: {
        ...validation.data,
        videoUrl,
      },
      create: {
        id: "home_content",
        ...validation.data,
        videoUrl,
      }
    });

    return NextResponse.json({ success: true, data: content, message: "Home content updated successfully" }, { status: 200 });

  } catch {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}