import { ComingSoonCard } from "@/components/coming-soon-card";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Separator } from "@/components/ui/separator";

export default function ExamplesPage() {
  return (
    <main className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Examples.</PageHeaderHeading>
        <PageHeaderDescription>
          Examples of UI/UX components I've built. These include interactive
          maps, calendars, and more.
        </PageHeaderDescription>
      </PageHeader>
      <Separator />
      <ComingSoonCard className="px-4 py-8" />
    </main>
  );
}
