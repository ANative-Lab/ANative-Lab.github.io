import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.join(projectRoot, "github-pages"),
  publicDir: path.join(projectRoot, "public"),
  plugins: [react()],
  build: {
    outDir: path.join(projectRoot, "dist-pages"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.join(projectRoot, "github-pages/index.html"),
        research: path.join(projectRoot, "github-pages/research.html"),
        systems: path.join(projectRoot, "github-pages/systems.html"),
        vision: path.join(projectRoot, "github-pages/vision.html"),
        people: path.join(projectRoot, "github-pages/people.html"),
        activities: path.join(projectRoot, "github-pages/activities.html"),
        join: path.join(projectRoot, "github-pages/join.html"),
      },
    },
  },
});
