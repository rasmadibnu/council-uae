import type { Prisma } from "@prisma/client";
import { prisma } from "../index";

export async function createUser(data: Prisma.UserCreateInput) {
  return await prisma.user.create({
    data: {
      username: data.username,
      name: data.name,
      password: data.password,
    },
  });
}

export async function findByUsername(username: string) {
  return await prisma.user.findFirst({
    where: {
      username: username,
    },
  });
}
