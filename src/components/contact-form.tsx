"use client";

import { FormErrors } from "@/components/form-errors";
import { FormInput } from "@/components/form-input";
import { FormSubmit } from "@/components/form-submit";
import { FormTextarea } from "@/components/form-textarea";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/api";
import { trackEvent } from "@/lib/events";
import { contactSchema, type ContactSchema } from "@/types/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function ContactForm() {
  const form = useForm<Parameters<typeof onSubmit>[number]>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { toast } = useToast();

  const sendMessage = api.contact.sendMessage.useMutation({
    onSuccess: (data, variables) => {
      form.reset();

      toast({
        description: "Message sent successfully!",
      });

      trackEvent({
        name: "send_message",
        properties: {
          ...variables,
          data,
        },
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

  const onSubmit = async (values: ContactSchema) => {
    await sendMessage.mutateAsync(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="space-y-4 pt-6">
          <CardContent className="space-y-4">
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
          </CardContent>
          <CardFooter className="flex items-center justify-end">
            <FormSubmit className="w-full">Send Message</FormSubmit>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
