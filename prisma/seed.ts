import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { homePageData } from './seed-data/home-page';
import { charterPageData } from './seed-data/charter-page';
import { serviceProviderPageData } from './seed-data/service-provider-page';
import { operatorsPageData } from './seed-data/operators-page';

async function main() {
  console.log("🌱 Starting seeding process...");

  const hashedPassword = await bcrypt.hash("password123", 10);
  await prisma.user.upsert({
    where: { email: "admin@gmail.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "ADMIN"
    }
  });
  console.log("✅ Admin user seeded.");

  const { items: homeItems, ...homeBaseContent } = homePageData;
  
  await prisma.homeContent.upsert({
    where: { id: "home_content" },
    update: homeBaseContent,
    create: homeBaseContent,
  });

  await prisma.homeSectionItem.deleteMany({ where: { homeId: "home_content" } });
  await prisma.homeSectionItem.createMany({
    data: homeItems.map(item => ({
      ...item,
      homeId: "home_content"
    }))
  });
  console.log("✅ Home page content and sections seeded.");

  const featurePages = [
    charterPageData,
    serviceProviderPageData,
    operatorsPageData
  ];

  for (const page of featurePages) {
    const { stats, features, ...pageBaseData } = page;

    await prisma.featurePage.upsert({
      where: { slug: page.slug },
      update: pageBaseData,
      create: pageBaseData,
    });

    const createdPage = await prisma.featurePage.findUnique({ where: { slug: page.slug } });

    if (createdPage) {
      
      await prisma.pageStat.deleteMany({ where: { pageId: createdPage.id } });
      await prisma.pageFeature.deleteMany({ where: { pageId: createdPage.id } });

      await prisma.pageStat.createMany({
        data: stats.map(s => ({ ...s, pageId: createdPage.id }))
      });

      await prisma.pageFeature.createMany({
        data: features.map(f => ({ ...f, pageId: createdPage.id }))
      });
    }
    console.log(`✅ Feature page [${page.slug}] seeded.`);
  }

  console.log("🚀 All seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });