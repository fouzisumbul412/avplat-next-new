import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const content = await prisma.homeContent.findUnique({ 
      where: { id: "home_content" },
      include: { items: { orderBy: { order: 'asc' } } }
    });

    if (!content) {
      return NextResponse.json({ success: false, message: "Content not found" }, { status: 404 });
    }

    const sections = content.items.reduce((acc: any, item) => {
      if (!acc[item.section]) acc[item.section] = [];
      acc[item.section].push(item);
      return acc;
    }, {});

    const { items, ...restOfContent } = content;

    return NextResponse.json({ success: true, data: { ...restOfContent, sections } }, { status: 200 });

  } catch {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}