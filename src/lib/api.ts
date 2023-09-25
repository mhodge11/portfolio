import { type AppRouter } from "@/server/root";
import { createTRPCReact } from "@trpc/react-query";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";

export const api = createTRPCReact<AppRouter>();

export type RouterInputs = inferRouterInputs<AppRouter>;

export type RouterOutputs = inferRouterOutputs<AppRouter>;
