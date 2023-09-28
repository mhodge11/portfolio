"use client";

import { FormErrors } from "@/components/form-errors";
import { FormInput } from "@/components/form-input";
import { FormSubmit } from "@/components/form-submit";
import { FormTextarea } from "@/components/form-textarea";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/api";
import { contactSchema, type ContactSchema } from "@/types/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const { toast } = useToast();

  const onSubmit = async (values: ContactSchema) => {
    await sendMessage.mutateAsync(values);
  };

  const form = useForm<Parameters<typeof onSubmit>[number]>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendMessage = api.contact.sendMessage.useMutation({
    onSuccess: () => {
      form.reset();
      toast({
        description: "Message sent successfully!",
      });
    },
    onError: (e) => {
      toast({
        title: "Failed to send message.",
        description: e.message,
        variant: "destructive",
      });
    },
  });

  return (
    <main className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Contact Me</PageHeaderHeading>
        <PageHeaderDescription>
          Reach out to schedule a meeting, ask a question, or just to say hi!
        </PageHeaderDescription>
      </PageHeader>
      <Separator />
      <div className="px-4 py-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex w-full gap-x-4">
              <FormInput
                control={form.control}
                name="name"
                label="Name"
                className="w-full flex-1"
              />

              <FormInput
                control={form.control}
                name="email"
                label="Email"
                type="email"
                className="w-full flex-1"
              />
            </div>

            <FormTextarea
              control={form.control}
              name="message"
              label="Message"
            />

            <FormErrors />

            <div className="flex items-center justify-end pt-4">
              <FormSubmit className="w-full sm:w-auto">Send Message</FormSubmit>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
