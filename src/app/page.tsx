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
        <PageHeaderHeading>Full-Stack Software Engineer.</PageHeaderHeading>
        <PageHeaderDescription>
          TypeScript, JavaScript, React, React Native, Next.js, Tailwind CSS,
          HTML, CSS, iOS, Swift, Express.js, Node.js, AWS, GraphQL, SQL and
          more.
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
            href={siteConfig.links.x}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.x className="mr-2 h-4 w-4 fill-current" />X (formerly
            Twitter)
          </Link>
        </div>
      </PageHeader>
      <Separator />
      <div className="px-4 py-8">
        Hi, I'm Micah! I'm a full-stack engineer that has spent over 7 years
        programming in Swift, JavaScript, TypeScript, and SQL, in multiple
        different frameworks. I've made iOS apps, cross-platform apps with React
        Native, and websites using pure React and, more recently, Next.js. I've
        made RESTful APIs as well as GraphQL APIs, using Express.js as the
        framework. I have designed PostgreSQL and MySQL databases. I'm extremely
        self-motivated. I've usually worked as a solo developer, or as product
        lead in a small engineering team, so I'm used to solving any problems
        that arise. I also enjoy the process of diving into areas that I am
        unfamiliar with. If you'd like to reach out, head over to the{" "}
        {
          <Link
            className="font-medium underline underline-offset-4"
            href="/contact"
          >
            Contact Page
          </Link>
        }{" "}
        and send me a message. I look forward to hearing what we can build
        together!
      </div>
    </main>
  );
}
