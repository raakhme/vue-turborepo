const vue = require("@vitejs/plugin-vue");
const { defineConfig } = require("vite");
const path = require("path");

module.exports = (libName) => {
  return defineConfig({
    plugins: [vue()],
    build: {
      lib: {
        entry: path.resolve(process.cwd(), "index.ts"),
        name: libName,
        fileName: "index",
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
};
