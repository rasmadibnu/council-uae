import response from "~/server/utils/helper";
import { type PaginateOptions } from "../../db/index";
import { listPost } from "../../db/repositories/postRepository";

export default defineEventHandler(async (event) => {
  const query: PaginateOptions = getQuery(event);
  const news = await listPost(query);
  return response(200, "Posts", news);
});
