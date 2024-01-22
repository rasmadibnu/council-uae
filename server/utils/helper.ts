import type { User } from "@prisma/client";
import { findByUsername } from "../db/repositories/userRepository";
export default function response(
  statusCode: number,
  message: string,
  data: any
) {
  return {
    code: statusCode,
    message: message,
    data: data,
  };
}

export function defineAuthenticatedEventHandler<T>(
  handler: (event: any, user: User) => T | Promise<T>
) {
  return defineEventHandler<T>(async (event) => {
    try {
      const token = event.node.req.headers["authorization"]?.split(" ")[1];

      const decoded = decodeAccessToken(token as string);

      if (!decoded) {
        return response(401, "Unauthorized", null);
      }

      const user = await findByUsername(decoded.username);

      event.context.auth = { user };

      return handler(event, user);
    } catch (err) {
      sendError(event, err);
    }
  });
}
