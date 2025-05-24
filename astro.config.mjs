import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkLivecodes from "remark-livecodes";

export default defineConfig({
  site: "https://markdown-to-livecodes-astro.pages.dev/",
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [
      [
        remarkLivecodes,
        {
          /* options */
        },
      ],
    ],
  },
});
