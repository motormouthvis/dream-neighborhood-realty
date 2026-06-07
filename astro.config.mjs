// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Production site URL. Update once the Netlify custom domain is attached.
export default defineConfig({
  site: "https://www.dreamneighborhoodrealty.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
