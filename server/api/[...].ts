import response from "~/server/utils/helper";

export default defineEventHandler(async (event) => {
  return response(404, "Page not found", null);
});
