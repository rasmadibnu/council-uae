import { prisma, createPaginator, type PaginateOptions } from "../index";
import type { Post, Prisma } from "@prisma/client";

export async function createPost(data: Prisma.PostCreateInput) {
  return await prisma.post.create({ data: data });
}

export async function listPost(filter: PaginateOptions) {
  const paginate = createPaginator(filter);

  return await paginate<Post, Prisma.PostFindManyArgs>(prisma.post, {
    include: {
      author: true,
      category: true,
    },
  });
}

export async function findPost(id: number) {
  return await prisma.post.findFirst({
    where: {
      id: id,
    },
    include: {
      author: true,
      category: true,
    },
  });
}

export async function updatePost(id: number, data: Prisma.PostUpdateInput) {
  return await prisma.post.update({
    where: { id: id },
    data: data,
  });
}

export async function deletePost(id: number) {
  return await prisma.post.delete({
    where: {
      id: id,
    },
  });
}
