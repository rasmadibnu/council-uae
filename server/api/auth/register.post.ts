import bcrypt from "bcrypt";
import { type User } from "~/types/User";
import { z } from "zod";
import response from "~/server/utils/helper";
import { createUser } from "~/server/db/repositories/userRepository";

const validation = z.object({
  username: z.string(),
  password: z.string(),
  name: z.string(),
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

  const { username, password, name } = body;
  const encryptedPassword: string = await bcrypt.hash(password, 10);

  const data: User = {
    username: username,
    name: name,
    password: encryptedPassword,
  };

  const user = await createUser(data);
  return response(200, "User created sucessfully", user);
});
