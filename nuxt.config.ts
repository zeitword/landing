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
});
