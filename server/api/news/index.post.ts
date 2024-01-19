import { z } from "zod";
import { createNews } from "~/server/db/repositories/newsRepository";
import response from "~/server/utils/helper";
import type { News } from "~/types/News";

const validation = z.object({
  title: z.string(),
  content: z.string(),
  category_id: z.number(),
});

export default defineEventHandler(async (event) => {
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

  const data: News = {
    title: body.title,
    content: body.content,
    category_id: body.category_id,
    created_by: event.context.auth.user.id,
  };

  const user = await createNews(data);
  return response(200, "User created sucessfully", user);
});
