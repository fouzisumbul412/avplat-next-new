import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET( req: NextRequest, { params }: { params: Promise<{ slug: string }> } ) {
  try {
    const { slug } = await params;

    const pageData = await prisma.featurePage.findUnique({
      where: { slug },
      include: {
        stats: { orderBy: { order: 'asc' } },
        features: { orderBy: { order: 'asc' } }
      }
    });

    if (!pageData) {
      return NextResponse.json({ success: false, message: "Page not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: pageData }, { status: 200 });

  } catch {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}