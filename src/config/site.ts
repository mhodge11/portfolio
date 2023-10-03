import { absoluteUrl, baseUrl } from "@/lib/utils";

export const siteConfig = {
  name: "micahhodge/software",
  url: baseUrl(),
  ogImage: absoluteUrl("og.png"),
  description: "Full-stack software engineer",
  links: {
    x: "https://twitter.com/micah__hodge",
    github: "https://github.com/mhodge11",
    githubProject: "https://github.com/mhodge11/portfolio",
    linkedin: "https://www.linkedin.com/in/micah-hodge-882b64277",
  },
};
