import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const news = await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "News",
    },
  });

  const event = await prisma.category.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Event",
    },
  });

  const hikmal = await prisma.user.upsert({
    where: { username: "hikmal" },
    update: {},
    create: {
      name: "Hikmaludin",
      username: "hikmal",
      password: "$2a$12$GAxgSh0EN1fLTJ6erhxYqeQmF7B9jxfEwJkEADCXeSazQ/MuIi9ty",
      posts: {
        create: {
          category: {
            connect: {
              id: 1,
            },
          },
          title: "Check out Prisma with Next.js",
          content: "https://www.prisma.io/nextjs",
          published: true,
        },
      },
    },
  });
  const ibnu = await prisma.user.upsert({
    where: { username: "rasmadibnu" },
    update: {},
    create: {
      name: "Rasmad Ibnu",
      username: "rasmadibnu",
      password: "$2a$12$GAxgSh0EN1fLTJ6erhxYqeQmF7B9jxfEwJkEADCXeSazQ/MuIi9ty",
      posts: {
        create: [
          {
            title: "Follow Prisma on Twitter",
            content: "https://twitter.com/prisma",
            category: {
              connect: {
                id: 2,
              },
            },
            published: true,
          },
          {
            title: "Follow Nexus on Twitter",
            content: "https://twitter.com/nexusgql",
            category: {
              connect: {
                id: 2,
              },
            },
            published: true,
          },
        ],
      },
    },
  });
  console.log({ news, event, hikmal, ibnu });
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
