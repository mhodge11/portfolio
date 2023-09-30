"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navConfig } from "@/config/nav";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

const comingSoonNav = navConfig.other.find(
  (nav) => nav.title === "Coming Soon",
);

export function ComingSoonDropdown() {
  const pathname = usePathname();
  const router = useRouter();

  const runCommand = React.useCallback((command: () => unknown) => {
    command();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "ml-2 cursor-pointer transition-colors hover:text-foreground/80",
            comingSoonNav?.items.find((navItem) => pathname === navItem.href)
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Coming Soon
          <span className="sr-only">Coming soon</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {comingSoonNav?.items.map((navItem) => (
          <DropdownMenuItem
            key={navItem.href}
            onClick={() => {
              runCommand(() => router.push(navItem.href!));
            }}
          >
            {navItem.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
