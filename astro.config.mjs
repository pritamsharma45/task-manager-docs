import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Task Manager",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      social: {
        // github: "https://github.com/withastro/starlight",
        youtube:
          "https://www.youtube.com/watch?v=HuGzHHk8B_M&list=PLGi_-BCQiKruw83cC0ON5nPRnac8b0uin",
      },
      editLink: {
        baseUrl:
          "https://github.com/pritamsharma45/task-manager-docs/edit/main/",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: {
            directory: "guides",
          },
          // items: [
          //   {
          //     label: "Example Guide",
          //     link: "/guides/example/",
          //   },
          //   {
          //     label: "Initial Setup",
          //     link: "/guides/initial-setup/",
          //   },
          //   {
          //     label: "Managing Clients",
          //     link: "/guides/clients/",
          //   },
          //   {
          //     label: "Managing Tasks",
          //     link: "/guides/tasks/",
          //   },
          // ],
        },
        // {
        //   label: "Reference",
        //   autogenerate: {
        //     directory: "reference",
        //   },
        // },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
