import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const content = await prisma.aboutContent.findUnique({
      where: { id: "about_content" },
      include: {
        pillars: { orderBy: { order: "asc" } },
        teamMembers: { orderBy: { order: "asc" } }
      }
    });

    if (!content) {
      return NextResponse.json({ success: false, message: "About page not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: content }, { status: 200 });
  } catch {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}