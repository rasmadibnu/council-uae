import { z } from "zod";
import { createCategory } from "~/server/db/repositories/categoryRepository";
import response from "~/server/utils/helper";
import type { Prisma } from "@prisma/client";
const validation = z.object({
  name: z.string(),
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

  const data = await createCategory(body as Prisma.CategoryCreateInput);
  return response(200, "Category created sucessfully", data);
});
