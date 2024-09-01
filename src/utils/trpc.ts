// src/utils/trpc.ts
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../server/router/appRouter';

export const trpc = createTRPCReact<AppRouter>();
