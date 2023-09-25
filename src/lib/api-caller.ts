import { appRouter } from "@/server/root";

export function apiCaller() {
  return appRouter.createCaller({});
}
