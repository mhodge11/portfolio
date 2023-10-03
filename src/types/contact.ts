import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  message: z.string().min(1),
});

export type ContactSchema = z.infer<typeof contactSchema>;
