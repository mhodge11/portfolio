import { Icons } from "@/components/icons";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <main className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Software Engineering Portfolio.</PageHeaderHeading>
        <PageHeaderDescription>
          TypeScript, JavaScript, React, React Native, Next.js, Tailwind CSS,
          iOS, Swift, Express.js, AWS, GraphQL, SQL and more.
        </PageHeaderDescription>
        <div className="flex w-full flex-wrap items-center gap-4 pt-4">
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedin}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.linkedIn className="mr-2 h-4 w-4" />
            LinkedIn
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.twitter}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.twitter className="mr-2 h-4 w-4 fill-current" />
            Twitter
          </Link>
        </div>
      </PageHeader>
      <Separator />
      <div className="p-4">
        I'm a full-stack engineer that has spent a lot of time coding in Swift,
        JavaScript, TypeScript, and SQL. I've made iOS apps, cross-platform apps
        with React Native, and websites using pure ReactJS and, more recently,
        NextJS. I've made REST APIs as well as GraphQL APIs, both using Express
        as the framework. I have designed PostgreSQL and MySQL databases. I'm
        self-motivated. I've usually worked as a sole-developer or as product
        lead in a small engineering team, so I'm used to solving any problems
        that arise. I also enjoy the process of diving into areas that I am
        unfamiliar with. I look forward to connecting!
      </div>
    </main>
  );
}
