// vite.config.js
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/react-router-blog/",
  plugins: [
    reactRouter(),
  ],
});