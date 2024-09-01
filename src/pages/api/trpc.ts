// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/router/appRouter'; // Import your main router

export default createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
