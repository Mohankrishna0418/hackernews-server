import { Hono } from "hono";
import { tokenmiddleware } from "./middleware/token-middleware";
import { GetAllUsers, GetMe } from "../controllers/users/user-controller";
import { GetAllUsersError, GetMeError } from "../controllers/users/user-types";
import { getPagination } from "../extras/pagination";

export const usersRoutes = new Hono();

usersRoutes.get("/me", tokenmiddleware, async (context) => {
  try {
    const userId = context.get("userId");
    const result = await GetMe({ userId });
    if (!result) {
      return context.json({ error: "User not found" }, 404);
    }
    return context.json(result, 200);
  } catch (error) {
    if (error === GetMeError.USER_NOT_FOUND) {
      return context.json({ error: "User not found" }, 404);
    }
    if (error === GetMeError.UNKNOWN) {
      return context.json({ error: "Unknown error" }, 500);
    }
  }
});

usersRoutes.get("/", tokenmiddleware, async (context) => {
  try {
    const { page, limit } = getPagination(context);
    const result = await GetAllUsers({ page, limit });
    if (!result) {
      return context.json({ error: "No users found" }, 404);
    }
    return context.json(result, 200);
  } catch (error) {
    if (error === GetAllUsersError.NO_USERS_FOUND) {
      return context.json({ error: "No users found" }, 404);
    }
    if (error === GetAllUsersError.UNKNOWN) {
      return context.json({ error: "Unknown error" }, 500);
    }
  }
});