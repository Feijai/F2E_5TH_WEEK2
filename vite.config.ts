import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import progress from "vite-plugin-progress";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  }
});
