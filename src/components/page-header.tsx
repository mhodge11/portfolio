import { cn } from "@/lib/utils";
import Balance from "react-wrap-balancer";

export const PageHeader = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <section
    className={cn(
      "flex max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12",
      className,
    )}
    {...props}
  >
    {children}
  </section>
);

export const PageHeaderHeading = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className={cn(
      "text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]",
      className,
    )}
    {...props}
  />
);

export const PageHeaderDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <Balance
    className={cn(
      "max-w-[750px] text-lg text-muted-foreground sm:text-xl",
      className,
    )}
    {...props}
  />
);
