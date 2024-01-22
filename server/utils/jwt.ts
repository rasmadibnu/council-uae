import type { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export const decodeAccessToken = (token: string) => {
  const config = useRuntimeConfig();

  try {
    return jwt.verify(token, config.jwtSecretKey);
  } catch (error) {
    return null;
  }
};

export const generateAccessToken = (user: User) => {
  const config = useRuntimeConfig();

  return jwt.sign(
    { id: user.id, username: user.username },
    config.jwtSecretKey,
    {
      expiresIn: "12h",
    }
  );
};
