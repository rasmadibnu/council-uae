import type { News } from "~/types/News";
import { prisma } from "../index";

export async function createNews(data: News) {
  const user = await prisma.news.create({
    data: {
      title: data.title as string,
      created_by: data.created_by as number,
      category_id: data.category_id as number,
      content: data.content,
    },
  });

  return user as News;
}
