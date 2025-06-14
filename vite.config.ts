import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 👇 Replace 'FitTrackerPro' with your exact GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: "/FitTrackerPro/", // 👈 Ye line added for GitHub Pages
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
