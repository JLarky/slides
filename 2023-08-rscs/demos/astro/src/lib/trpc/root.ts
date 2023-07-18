import type { AstroGlobal } from "astro";

import { helloRouter } from "./routers/hello";
import { createTRPCRouter, createTRPCServerSideHelpers } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  hello: helloRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

export const createCaller = appRouter.createCaller;
export const createServerSideHelpers = createTRPCServerSideHelpers(appRouter);
// short form for cases when you call it from .astro file
export const createHelpers = (Astro: AstroGlobal) =>
  createServerSideHelpers({
    req: Astro.request,
    resHeaders: Astro.response.headers,
  });
export type Helpers = ReturnType<typeof createHelpers>;
