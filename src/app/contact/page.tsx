import { ContactForm } from "@/components/contact-form";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <main className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Contact Me.</PageHeaderHeading>
        <PageHeaderDescription>
          Reach out to schedule a meeting, ask a question, or just to say hi!
        </PageHeaderDescription>
      </PageHeader>
      <Separator />
      <div className="flex flex-1 items-center justify-center px-4 py-8">
        <ContactForm />
      </div>
    </main>
  );
}
