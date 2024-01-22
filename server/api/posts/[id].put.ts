import { z } from "zod";
import { updatePost } from "~/server/db/repositories/postRepository";
import response from "~/server/utils/helper";
import type { Prisma } from "@prisma/client";
const validation = z.object({
  title: z.string(),
  content: z.string(),
  category_id: z.number(),
});

export default defineAuthenticatedEventHandler(async (event, user) => {
  const id = getRouterParam(event, "id");

  const body = await readBody(event);
  const validate = validation.safeParse(body);
  if (!validate.success)
    return response(
      422,
      "Bad Request",
      validate.error.issues.map((e) => {
        return {
          [e.path[0]]: e.message,
        };
      })
    );

  const data: Prisma.PostUpdateInput = {
    title: body.title,
    content: body.content,
    category: {
      connect: {
        id: body.category_id,
      },
    },
    author: {
      connect: {
        id: user.id,
      },
    },
  };

  const post = await updatePost(parseInt(id as string), data);
  if (post) {
    return response(200, "Post updated sucessfully", post);
  } else {
    return response(404, "Post not found", null);
  }
});
