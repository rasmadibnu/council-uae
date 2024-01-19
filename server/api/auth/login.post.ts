import { z } from "zod";
import { findByUsername } from "~/server/db/repositories/userRepository";
import response from "~/server/utils/helper";
import bcrypt from "bcrypt";
import { generateAccessToken } from "~/server/utils/jwt";

const validation = z.object({
  username: z.string(),
  password: z.string(),
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

  const { username, password } = body;

  const findUser = await findByUsername(username);

  if (!findUser)
    return response(404, `User with username ${username} not found`, null);

  const comoparePassword = await bcrypt.compare(
    password,
    findUser.password as string
  );

  if (!comoparePassword) return response(422, "Wrong password", null);

  const token = await generateAccessToken(findUser);

  return response(200, "Login successfully", token);
});
