import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.TodoCreateInput[] = [
  {
    text: "Create presentation",
    completed: true,
  },
  {
    text: "Buy pizza",
    completed: true,
  },
  {
    text: "Put kids in bed",
    completed: false,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.todo.create({
      data: u,
    });
    console.log(`Created todo with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
