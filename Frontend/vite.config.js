import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Development
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },

  // Production
  preview: {
    allowedHosts: ["die-galerie-frontend-ayep.onrender.com"],
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 4173,
  },

  // Das "build"-Profil musst du eigentlich im Docker-Container einsetzen,
  // wenn du deine Applikation hochschalten möchtest ↓

  // build: {
  //   watch: {
  //     usePolling: true,
  //   },
  //   host: true,
  //   strictPort: true,
  //   port: 4173,
  // },
});
