import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    /** КЭШируем само приложение и асеты */
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    }),
    /** Иммитация БД */
    VitePWA({
      srcDir: "src",
      filename: "service-worker.ts",
      strategies: "injectManifest",
      injectRegister: false,
      manifest: {
        icons: [{ src: "./vite.svg", sizes: "192x192" }],
        theme_color: "#000000",
      },
      injectManifest: {
        injectionPoint: undefined,
      },
      /* enable sw on development */
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
