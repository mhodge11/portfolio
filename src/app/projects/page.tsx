import { ComingSoonCard } from "@/components/coming-soon-card";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Separator } from "@/components/ui/separator";

export default function ProjectsPage() {
  return (
    <main className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Projects.</PageHeaderHeading>
        <PageHeaderDescription>
          Projects I've worked on. All open source projects are linked to their
          GitHub repositories. All private projects are linked to their
          respective websites.
        </PageHeaderDescription>
      </PageHeader>
      <Separator />
      <ComingSoonCard className="px-4 py-8" />
    </main>
  );
}
