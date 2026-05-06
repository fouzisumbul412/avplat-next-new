import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";

export async function GET() {
  try {
    const admin = await getAdmin();
    if (!admin) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const [charters, quotes, pages, homeItems] = await Promise.all([
      prisma.charterRequest.count(),
      prisma.quoteRequest.count(),
      prisma.featurePage.count(),
      prisma.homeSectionItem.count(),
    ]);

    const [chartersSynced, quotesSynced] = await Promise.all([
      prisma.charterRequest.count({ where: { zohoSynced: true } }),
      prisma.quoteRequest.count({ where: { zohoSynced: true } }),
    ]);

    const currentYear = new Date().getFullYear();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const yearlyCharters = await prisma.charterRequest.findMany({
      where: { createdAt: { gte: new Date(`${currentYear}-01-01`) } },
      select: { createdAt: true }
    });

    const yearlyQuotes = await prisma.quoteRequest.findMany({
      where: { createdAt: { gte: new Date(`${currentYear}-01-01`) } },
      select: { createdAt: true }
    });

    const chartData = months.map((month, idx) => {
      const charterCount = yearlyCharters.filter(c => c.createdAt.getMonth() === idx).length;
      const quoteCount = yearlyQuotes.filter(q => q.createdAt.getMonth() === idx).length;
      return {
        name: month,
        Charters: charterCount,
        Quotes: quoteCount
      };
    });

    return NextResponse.json({
      success: true,
      data: {
        counts: { charters, quotes, pages, homeItems },
        sync: { chartersSynced, quotesSynced },
        chartData
      }
    });

  } catch {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}