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
        { property: "og:image", content: "/og-image.png" },
        { property: "twitter:image", content: "/og-image.png" },
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
