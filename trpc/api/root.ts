import { createCallerFactory, createTRPCRouter, publicProcedure } from "./trpc";
import { postRouter } from "./routers/postRouter";

export type AppRouter = typeof appRouter;
export const appRouter = createTRPCRouter({
  post: postRouter,
});

export const createCaller = createCallerFactory(appRouter);
