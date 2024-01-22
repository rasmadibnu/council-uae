import { z } from "zod";
import { updateCategory } from "~/server/db/repositories/categoryRepository";
import response from "~/server/utils/helper";
import type { Prisma } from "@prisma/client";
const validation = z.object({
  name: z.string(),
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

  const category = await updateCategory(
    parseInt(id as string),
    body as Prisma.CategoryUpdateInput
  );
  if (category) {
    return response(200, "Category updated sucessfully", category);
  } else {
    return response(404, "Category not found", null);
  }
});
