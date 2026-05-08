import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

import { homePageData } from './seed-data/home-page';
import { charterPageData } from './seed-data/charter-page';
import { serviceProviderPageData } from './seed-data/service-provider-page';
import { operatorsPageData } from './seed-data/operators-page';
import { aboutPageData } from './seed-data/about-page';
import { blogPostsData } from './seed-data/blogs';

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

  // seed home page
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

  // seed feature pages
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

  // seed about page
  const { pillars: aboutPillars, teamMembers: aboutTeam, ...aboutBaseData } = aboutPageData;

  await prisma.aboutContent.upsert({
    where: { id: "about_content" },
    update: aboutBaseData,
    create: { id: "about_content", ...aboutBaseData },
  });

  await prisma.aboutPillar.deleteMany({ where: { aboutId: "about_content" } });
  await prisma.aboutTeamMember.deleteMany({ where: { aboutId: "about_content" } });

  await prisma.aboutPillar.createMany({
    data: aboutPillars.map(p => ({ ...p, aboutId: "about_content" }))
  });
  
  await prisma.aboutTeamMember.createMany({
    data: aboutTeam.map(t => ({ ...t, aboutId: "about_content" }))
  });
  console.log("✅ About page seeded.");

  // seed blog posts
  for (const blog of blogPostsData) {
    await prisma.blogPost.upsert({
      where: { slug: blog.slug },
      update: blog,
      create: blog,
    });
  }
  console.log("✅ Blog Posts seeded.");

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