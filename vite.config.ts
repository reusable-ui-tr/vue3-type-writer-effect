import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import libCss from 'vite-plugin-libcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), libCss()],
  css: {
    postcss: {
      plugins: [
          autoprefixer
      ],
    }
  },
  build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/index.ts"),
      name: "Vue3TypeWriterEffect",
      // the name of the output files when the build is run
      fileName: "vue3-type-writer-effect",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});