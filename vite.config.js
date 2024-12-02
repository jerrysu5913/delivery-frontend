import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://food-delivery-7660d10f4925.herokuapp.com",
        changeOrigin: true,
      },
    },
  },
});
