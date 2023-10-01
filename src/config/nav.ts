import {
  type MainNavItem,
  type OtherNavItem,
  type SidebarNavItem,
} from "@/types/nav";

interface NavConfig {
  main: MainNavItem[];
  other: OtherNavItem[];
  examplesSidebar: SidebarNavItem;
  projectsSidebar: SidebarNavItem;
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
          items: [],
        },
        {
          title: "Examples",
          href: "/examples",
          items: [],
        },
      ],
    },
  ],
  examplesSidebar: {
    title: "Examples",
    items: [],
  },
  projectsSidebar: {
    title: "Projects",
    items: [
      {
        title: "BusBuddy",
        href: "/projects/busbuddy",
        items: [],
      },
      {
        title: "Thrive Lot",
        href: "/projects/thrivelot",
        items: [],
      },
      {
        title: "Mapzen",
        href: "/projects/mapzen",
        items: [],
      },
      {
        title: "SeatsOpen",
        href: "/projects/seatsopen",
        items: [],
      },
      {
        title: "Fleet Revolution",
        href: "/projects/fleetrevolution",
        items: [],
      },
      {
        title: "Light TRVLR",
        href: "/projects/lighttrvlr",
        items: [],
      },
      {
        title: "ORNL",
        href: "/projects/ornl",
        items: [],
      },
    ],
  },
};
