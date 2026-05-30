import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      injectRegister: false,
      includeAssets: ["favicon.svg", "icon.svg"],
      manifest: {
        name: "FMGE Roadmap",
        short_name: "FMGE",
        description: "13-month FMGE prep roadmap — analysis, resources, daily schedule, progress tracker.",
        theme_color: "#0b1020",
        background_color: "#0b1020",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        categories: ["education", "medical"],
        lang: "en",
        icons: [
          { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any maskable" },
          { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        globPatterns: ["**/*.{js,css,html,svg,ico}"],
        navigateFallback: "/index.html",
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/firestore\.googleapis\.com/,
            handler: "NetworkFirst",
            options: { cacheName: "firestore-cache" },
          },
        ],
      },
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          firebase: ["firebase/app", "firebase/firestore"],
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
