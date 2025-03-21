import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },

  vite: {
    plugins: [tailwindcss()],
  },
  css: ["@/assets/css/main.css"],
  components: {
    global: true,
    dirs: ["~/components"],
  },
  devtools: { enabled: false },
  modules: ["@nuxt/fonts", "@nuxt/image"],

  app: {
    head: {
      title: "Zeitword",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "The open-source, block based, headless CMS built for developer productivity and content creator joy.",
        },

        // OpenGraph
        { property: "og:title", content: "Zeitword" },
        {
          property: "og:description",
          content:
            "The open-source, block based, headless CMS built for developer productivity and content creator joy.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://zeitword.com" },
        { property: "og:image", content: "/og-image.png" },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Zeitword" },
        {
          name: "twitter:description",
          content:
            "The open-source, block based, headless CMS built for developer productivity and content creator joy.",
        },
        { name: "twitter:image", content: "/og-image.png" },
        { name: "twitter:site", content: "@zeitword" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon-light.png",
          media: "(prefers-color-scheme: light)",
        },
      ],
      script: [
        {
          defer: true,
          "data-domain": "zeitword.com",
          src: "https://plausible.io/js/script.js",
        },
      ],
    },
  },
});
