import { type NavItem, type NavItemWithChildren } from "@/types/nav";

interface DocsConfig {
  mainNav: NavItem[];
  sidebarNav: NavItemWithChildren[];
}

export const navConfig: DocsConfig = {
  mainNav: [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Resume",
      href: "/resume",
    },
    {
      title: "Dependencies",
      href: "/dependencies",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  sidebarNav: [],
};
