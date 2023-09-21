import { contactRouter } from "@/server/routers";
import { createTRPCRouter } from "@/server/trpc";

export const appRouter = createTRPCRouter({
  contact: contactRouter,
});

export type AppRouter = typeof appRouter;
