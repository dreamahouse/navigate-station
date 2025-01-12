import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/navigate-station/",
  build: {
    outDir: "docs", // 将构建输出目录改为 docs
  },
});
