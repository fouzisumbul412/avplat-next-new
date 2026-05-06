import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";
import { uploadVideo, uploadImage, deleteFile } from "@/lib/uploads";
import { z } from "zod";
import { MAX_FILE_SIZE, MAX_VIDEO_SIZE } from "@/lib/constants";

const homeSchema = z.object({
  titleBlack: z.string().min(1, "Primary title is required"),
  titleBlue: z.string().min(1, "Highlighted title is required"),
  description: z.string().min(1, "Description is required"),
  appStoreUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  playStoreUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

const itemSchema = z.object({
  id: z.string().optional(),
  section: z.enum(["FAQ", "CAROUSEL", "SERVICES","REWIRED"]),
  title: z.string().min(1, "Item title is required"),
  description: z.string().min(1, "Item description is required"),
  link: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
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

    const rawItemsStr = formData.get("items") as string;
    const rawItems = rawItemsStr ? JSON.parse(rawItemsStr) : [];
    
    const itemsValidation = z.array(itemSchema).safeParse(rawItems);
    if (!itemsValidation.success) {
      return NextResponse.json({ success: false, message: "Invalid items format or missing fields" }, { status: 400 });
    }

    const existingContent = await prisma.homeContent.findUnique({ where: { id: "home_content" } });

    let videoUrl = existingContent?.videoUrl || "";
    const videoFile = formData.get("video") as File | null;

    if (videoFile && videoFile.size > 0 && videoFile.name !== 'undefined') {

      if (videoFile.size > MAX_VIDEO_SIZE) {
        return NextResponse.json({ success: false, message: "Video exceeds 50MB limit." }, { status: 400 });
      }

      if (existingContent?.videoUrl) {
        await deleteFile(existingContent.videoUrl);
      }
      videoUrl = await uploadVideo(videoFile, "home");
    }

    const content = await prisma.homeContent.upsert({
      where: { id: "home_content" },
      update: { ...validation.data, videoUrl },
      create: { id: "home_content", ...validation.data, videoUrl }
    });

    const validatedItems = itemsValidation.data;
    const incomingItemIds = validatedItems.map(i => i.id).filter(Boolean) as string[];

    // delete old items
    const itemsToDelete = await prisma.homeSectionItem.findMany({
      where: { homeId: content.id, id: { notIn: incomingItemIds } }
    });
    
    for (const oldItem of itemsToDelete) {
      if (oldItem.image) {
        await deleteFile(oldItem.image);
      }
    }

    await prisma.homeSectionItem.deleteMany({
      where: { homeId: content.id, id: { notIn: incomingItemIds } }
    });

    // update items
    for (const [index, item] of validatedItems.entries()) {
      let imageUrl = item.image || "";
      
      const itemImageFile = formData.get(`image_${index}`) as File | null;
    
      if (itemImageFile && itemImageFile.size > 0 && itemImageFile.name !== 'undefined') {
        if (itemImageFile.size > MAX_FILE_SIZE) {
          return NextResponse.json({ success: false, message: `Image for "${item.title}" exceeds 4MB limit.` }, { status: 400 });
        }

        if (item.id) {
          const existingItem = await prisma.homeSectionItem.findUnique({ where: { id: item.id } });
          if (existingItem?.image) {
            await deleteFile(existingItem.image);
          }
        }
        
        imageUrl = await uploadImage(itemImageFile, `home/${item.section.toLowerCase()}`);
      }

      const itemData = {
        homeId: content.id,
        section: item.section,
        title: item.title,
        description: item.description,
        link: item.link || "",
        image: imageUrl,
        order: index
      };

      if (item.id) {
        await prisma.homeSectionItem.update({ where: { id: item.id }, data: itemData });
      } else {
        await prisma.homeSectionItem.create({ data: itemData });
      }
    }

    return NextResponse.json({ success: true, message: "Home content updated successfully" }, { status: 200 });

  } catch {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}