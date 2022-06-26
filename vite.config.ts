import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/character-card/",
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.js', '.json', '.ts', '.vue'],
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: "components", replacement: path.resolve(__dirname, './src/components') },
      { find: "hooks", replacement: path.resolve(__dirname, './src/hooks') },
      { find: "types", replacement: path.resolve(__dirname, './src/types') },
      { find: "utils", replacement: path.resolve(__dirname, './src/utils') },
    ]
  },
})
