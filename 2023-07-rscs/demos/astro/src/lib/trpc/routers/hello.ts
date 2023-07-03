import { createTRPCRouter, publicProcedure } from "../trpc";

let i = 0;
export const helloRouter = createTRPCRouter({
  getCount: publicProcedure.query(() => {
    return i;
  }),
  increment: publicProcedure.mutation(() => {
    return ++i;
  }),
});
