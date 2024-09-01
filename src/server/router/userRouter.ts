// src/server/router/userRouter.ts
import { z } from "zod";
import { createRouter } from "../createRouter";

export const userRouter = createRouter()
  .mutation('createUser', {
    input: z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }),
    async resolve({ input }) {
      // Your logic for creating a user
      // Example: Save user to database
      return { success: true };
    },
  })
  .query('getUser', {
    input: z.string().uuid(),
    async resolve({ input }) {
      // Your logic to fetch user by ID
      // Example: Retrieve user from database
      return { id: input, email: 'user@example.com' };
    },
  });
