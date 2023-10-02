import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    RESEND_KEY: z.string().nonempty(),
    CONTACT_EMAIL: z.string().email(),
    SERVER_MAPBOX_TOKEN: z.string().nonempty(),
  },
  client: {
    NEXT_PUBLIC_MAPBOX_TOKEN: z.string().nonempty(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    RESEND_KEY: process.env.RESEND_KEY,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    SERVER_MAPBOX_TOKEN: process.env.SERVER_MAPBOX_TOKEN,
    NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  },
});
