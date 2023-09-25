import { Separator } from "@/components/ui/separator";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface ListRowExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ListRowExternalLink({
  href,
  children,
}: ListRowExternalLinkProps) {
  return (
    <>
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-between rounded-md p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        {children}
        <OpenInNewWindowIcon className="ml-1 h-4 w-4" />
      </Link>
      <Separator />
    </>
  );
}
