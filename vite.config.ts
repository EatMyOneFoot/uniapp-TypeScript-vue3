import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import commonjs from '@rollup/plugin-commonjs';

// vite配置文档：https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), commonjs()],
  server: {
    port: 9696,
    open: true,
    proxy: {
      // '/api': {
      //   target: 'http://localhost',
      //   changeOrigin: true,
      //   ws: false,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
      '/prod-api': {
        target: 'https://aiskin.vip',
        changeOrigin: true,
      },
    }
  }
});
