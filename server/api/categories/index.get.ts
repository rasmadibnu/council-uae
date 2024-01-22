import response from "~/server/utils/helper";
import { type PaginateOptions } from "../../db/index";
import { listCategory } from "../../db/repositories/categoryRepository";

export default defineEventHandler(async (event) => {
  const query: PaginateOptions = getQuery(event);
  const news = await listCategory(query);
  return response(200, "Categories", news);
});
