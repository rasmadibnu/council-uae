import { prisma } from "../../db/index";

export default defineEventHandler(async (event) => {
  const data = [];
  for (const [key, value] of Object.entries(prisma)) {
    data.push(value);
  }
  return data.join("\n");
});
