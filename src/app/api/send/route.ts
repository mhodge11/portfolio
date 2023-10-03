import { ContactEmail } from "@/components/contact-email";
import { env } from "@/env.mjs";
import { type ContactSchema } from "@/types/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as ContactSchema;

    const data = await resend.emails.send({
      from: "Portfolio Contact Form <contact@micahhodge.me>",
      to: env.CONTACT_EMAIL,
      subject: `You've been contacted by: ${name}`,
      react: ContactEmail({ name, email, message }),
      text: `New message from ${name} (${email}):\n\n${message}`,
    });

    return NextResponse.json(data, { status: 200 });
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e);
      return NextResponse.json({ message: e.message }, { status: 500 });
    }
  }
}
