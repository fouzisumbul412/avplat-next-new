import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

async function main() {

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