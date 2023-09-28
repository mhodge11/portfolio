import { type NavItem, type NavItemWithChildren } from "@/types/nav";


interface NavConfig {
  main: NavItem[];
  other: NavItemWithChildren[];
}

export const navConfig: NavConfig = {
  main: [
    {
      title: "Resume",
      href: "/resume",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Dependencies",
      href: "/dependencies",
    },
  ],
  other: [
    {
      title: "Coming Soon",
      items: [
        {
          title: "Projects",
          href: "/projects",
        },
        {
          title: "Examples",
          href: "/examples",
        },
      ],
    },
  ],
};