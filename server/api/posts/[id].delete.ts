import { deletePost } from "~/server/db/repositories/postRepository";
import response from "~/server/utils/helper";

export default defineAuthenticatedEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  const deletes = await deletePost(parseInt(id as string));
  if (deletes) {
    return response(200, "Post deleted sucessfully", deletes);
  } else {
    return response(404, "Post not found", null);
  }
});
