import { prisma, createPaginator, type PaginateOptions } from "../index";
import type { Category, Prisma } from "@prisma/client";

export async function createCategory(data: Prisma.CategoryCreateInput) {
  return await prisma.category.create({ data: data });
}

export async function listCategory(filter: PaginateOptions) {
  const paginate = createPaginator(filter);

  return await paginate<Category, Prisma.CategoryFindManyArgs>(prisma.category);
}

export async function updateCategory(
  id: number,
  data: Prisma.CategoryUpdateInput
) {
  return await prisma.category.update({
    where: { id: id },
    data: data,
  });
}

export async function deleteCategory(id: number) {
  return await prisma.category.delete({
    where: {
      id: id,
    },
  });
}
