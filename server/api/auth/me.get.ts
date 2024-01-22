export default defineAuthenticatedEventHandler(async (_, user) => {
  return user;
});
