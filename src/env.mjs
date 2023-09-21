import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";


export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    RESEND_KEY: z.string().min(1),
    CONTACT_EMAIL: z.string().email(),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    RESEND_KEY: process.env.RESEND_KEY,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  },
});