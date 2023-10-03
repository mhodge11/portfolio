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
        <PageHeaderHeading>Full Stack Software Engineer.</PageHeaderHeading>
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
      <div className="px-4 py-8 text-xl">
        Hello, my name is Micah. I am an accomplished Full Stack Software
        Engineer with over seven years of experience, specializing in Swift,
        JavaScript, TypeScript, GraphQL, and SQL, across various frameworks. My
        portfolio includes the development of iOS applications, cross-platform
        applications using React Native, as well as web applications utilizing
        React and the more recent Next.js. I am proficient in creating both
        RESTful and GraphQL APIs, often employing Express.js as the foundational
        framework. My competencies in database architecture include but are not
        limited to, expertise in relational databases like PostgreSQL and MySQL,
        along with proficiency in NoSQL databases such as DynamoDB and MongoDB.
        I also have an extensive track record in effectively leveraging the
        Amazon Web Services (AWS) ecosystem. With a strong propensity for
        self-motivation, I have predominantly functioned as either an
        independent contributor or as a product lead within compact engineering
        teams. This experience has equipped me with the problem-solving skills
        essential for tackling a diverse range of challenges. I relish the
        opportunity to delve into unfamiliar domains to expand my knowledge
        base. To discuss potential collaborations, please navigate to the{" "}
        {
          <Link
            className="font-semibold underline underline-offset-4"
            href="/contact"
          >
            Contact Page
          </Link>
        }{" "}
        and send me a message. I am excited about the prospects of what we can
        achieve together.
      </div>
    </main>
  );
}
