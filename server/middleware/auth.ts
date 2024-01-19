import { findByUsername } from "../db/repositories/userRepository";

export default eventHandler(async (event) => {
  const protectedRoutes = [{ path: "/api/news", method: "POST" }];

  if (
    !event?.path ||
    !protectedRoutes
      .filter((api) => {
        return api.method === event.method;
      })
      .map((api) => api.path)
      .includes(event.path)
  ) {
    return;
  }

  const token = event.node.req.headers["authorization"]?.split(" ")[1];

  const decoded = decodeAccessToken(token as string);

  if (!decoded) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      })
    );
  }

  try {
    const user = await findByUsername(decoded.username);

    event.context.auth = { user };
  } catch (error) {
    return;
  }
});
