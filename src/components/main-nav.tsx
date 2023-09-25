"use client";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/projects"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/projects" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Projects
        </Link>
        <Link
          href="/resume"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/resume" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Resume
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/contact" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Contact
        </Link>
        <Link
          href="/dependencies"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/dependencies"
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Dependencies
        </Link>
      </nav>
    </div>
  );
}
