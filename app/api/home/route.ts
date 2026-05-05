import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const content = await prisma.homeContent.findUnique({ where: { id: "home_content" }});

    return NextResponse.json({ success: true, data: content }, { status: 200 });
  } catch {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}