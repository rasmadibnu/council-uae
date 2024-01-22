import { z } from "zod";
import { createPost } from "~/server/db/repositories/postRepository";
import response from "~/server/utils/helper";
import type { Prisma } from "@prisma/client";
const validation = z.object({
  title: z.string(),
  content: z.string(),
  category_id: z.number(),
});

export default defineAuthenticatedEventHandler(async (event, user) => {
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

  const data: Prisma.PostCreateInput = {
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

  const post = await createPost(data);
  return response(200, "Post created sucessfully", post);
});
