import { prisma } from "../index";
import { type User, type UserPreview } from "~/types/User";

export async function createUser(data: User) {
  const user = await prisma.user.create({
    data: {
      username: data.username,
      name: data.name,
      password: data.password,
    },
  });

  return user as UserPreview;
}

export async function findByUsername(username: string) {
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });

  return user as User;
}
