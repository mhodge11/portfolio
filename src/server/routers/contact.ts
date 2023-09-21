import { baseUrl } from "@/lib/utils";
import { createTRPCRouter, publicProcedure } from "@/server/trpc";
import { contactSchema } from "@/types/contact";
import { TRPCError } from "@trpc/server";

export const contactRouter = createTRPCRouter({
  sendMessage: publicProcedure
    .input(contactSchema)
    .mutation(async ({ input }) => {
      try {
        await fetch(`${baseUrl()}/api/send`, {
          method: "POST",
          body: JSON.stringify(input),
        });
      } catch (e: unknown) {
        console.error(e);

        throw new TRPCError({
          code: "UNPROCESSABLE_CONTENT",
          message: "There was an error in the contact form. Please try again.",
          cause: e,
        });
      }

      return "SUCCESS";
    }),
});
