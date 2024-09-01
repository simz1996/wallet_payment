// src/server/router/appRouter.ts
import { createRouter } from '../createRouter';
import { userRouter } from './userRouter';

export const appRouter = createRouter()
  .merge('user.', userRouter);

export type AppRouter = typeof appRouter;
