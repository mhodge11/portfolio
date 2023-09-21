import { ListRowExternalLink } from "@/components/list-row";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { dependencies } from "@/config/dependencies";

export default function DependenciesPage() {
  return (
    <main className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Dependencies</PageHeaderHeading>
        <PageHeaderDescription>
          All open source projects used in this portfolio.
        </PageHeaderDescription>
      </PageHeader>
      <Separator />
      {dependencies.map((dependency) => (
        <ListRowExternalLink
          key={dependency}
          href={`https://www.npmjs.com/package/${dependency}`}
        >
          {dependency}
        </ListRowExternalLink>
      ))}
    </main>
  );
}
