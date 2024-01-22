import { deleteCategory } from "~/server/db/repositories/categoryRepository";
import response from "~/server/utils/helper";

export default defineAuthenticatedEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  const data = await deleteCategory(parseInt(id as string));

  if (data) {
    return response(200, "Cateogry deleted sucessfully", data);
  } else {
    return response(404, "Category not found", null);
  }
});
