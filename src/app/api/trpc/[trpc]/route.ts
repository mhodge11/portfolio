import { env } from "@/env.mjs";
import { appRouter } from "@/server/root";
import { createTRPCContext } from "@/server/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
    onError: ({ path, error }) => {
      if (env.NODE_ENV === "development") {
        console.error(
          `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
          error,
        );
      }
    },
  });

export { handler as GET, handler as POST };
