import { findPost } from "~/server/db/repositories/postRepository";
import response from "~/server/utils/helper";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  const post = await findPost(parseInt(id as string));
  if (post) {
    return response(200, "Post found", post);
  } else {
    return response(404, "Post not found", null);
  }
});
