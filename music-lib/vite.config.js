import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "musicLib",
      filename: "remoteEntry.js",
      exposes: {
        "./MusicLibrary": "./src/MusicLibrary.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5001,
  },
  build: {
    target: "esnext",
  },
});
