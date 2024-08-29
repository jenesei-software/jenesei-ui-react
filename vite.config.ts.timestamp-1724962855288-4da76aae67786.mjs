// vite.config.ts
import react from "file:///C:/Users/cyril-strone/Work/jenesei-software/jenesei-ui-react/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path, { resolve } from "path";
import { defineConfig } from "file:///C:/Users/cyril-strone/Work/jenesei-software/jenesei-ui-react/node_modules/vite/dist/node/index.js";
import dts from "file:///C:/Users/cyril-strone/Work/jenesei-software/jenesei-ui-react/node_modules/vite-plugin-dts/dist/index.mjs";
import tsconfigPaths from "file:///C:/Users/cyril-strone/Work/jenesei-software/jenesei-ui-react/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var peerDependencies = {
  "@emotion/styled": "^11.11.5",
  "@tanstack/react-form": "^0.31.0",
  "@tanstack/react-virtual": "^3.5.1",
  "@tanstack/zod-form-adapter": "^0.31.0",
  "@types/js-cookie": "^3.0.6",
  "@types/react-helmet": "^6.1.11",
  "country-list-with-dial-code-and-flag": "^5.0.5",
  gsap: "^3.12.5",
  "js-cookie": "^3.0.5",
  react: "^18.2.0",
  "react-currency-input-field": "^3.8.0",
  "react-dom": "^18.2.0",
  "react-helmet": "^6.1.0",
  "react-hook-form": "^7.49.3",
  "react-i18next": "^15.0.0",
  "react-loading": "^2.0.3",
  "react-loading-skeleton": "^3.4.0",
  "react-number-format": "^5.3.4",
  "react-ripple-click": "^1.3.0",
  "react-toggle": "^4.1.3",
  "styled-components": ">= 5",
  "styled-reset": "^4.5.2",
  zod: "^3.23.8"
};

// vite.config.ts
var __vite_injected_original_dirname = "C:\\Users\\cyril-strone\\Work\\jenesei-software\\jenesei-ui-react";
var vite_config_default = defineConfig(() => {
  const isStorybookBuild = process.env.BUILD_STORYBOOK === "true";
  return {
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-styled-components", { displayName: false }]],
          env: {
            development: {
              plugins: [
                ["babel-plugin-styled-components", { displayName: true }]
              ]
            }
          }
        }
      }),
      tsconfigPaths(),
      !isStorybookBuild && dts({
        include: ["src/"],
        exclude: ["src/declaration/styled.d.ts"],
        rollupTypes: true,
        insertTypesEntry: true,
        tsConfigFilePath: "./tsconfig.json"
      })
    ].filter(Boolean),
    publicDir: false,
    build: {
      sourcemap: true,
      outDir: "dist",
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      lib: {
        entry: resolve(__vite_injected_original_dirname, "src/main.ts"),
        name: "jenesei-ui-react",
        formats: ["es", "umd"],
        fileName: (format) => `jenesei-ui-react.${format}.js`
      },
      rollupOptions: {
        external: Object.keys(peerDependencies),
        output: {
          sourcemap: true,
          globals: {
            "styled-components": "styled",
            "react-ripple-click": "reactRippleClick",
            "styled-reset": "reset",
            react: "React",
            "react-loading": "ReactLoading",
            "react-number-format": "reactNumberFormat",
            "@tanstack/react-virtual": "reactVirtual",
            gsap: "gsap",
            "js-cookie": "Cookies",
            "react-i18next": "reactI18next",
            "react-helmet": "reactHelmet",
            "react-toggle": "ReactToggle",
            "react-dom": "ReactDOM"
          }
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcY3lyaWwtc3Ryb25lXFxcXFdvcmtcXFxcamVuZXNlaS1zb2Z0d2FyZVxcXFxqZW5lc2VpLXVpLXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjeXJpbC1zdHJvbmVcXFxcV29ya1xcXFxqZW5lc2VpLXNvZnR3YXJlXFxcXGplbmVzZWktdWktcmVhY3RcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2N5cmlsLXN0cm9uZS9Xb3JrL2plbmVzZWktc29mdHdhcmUvamVuZXNlaS11aS1yZWFjdC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuaW1wb3J0IHBhdGgsIHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xyXG5cclxuaW1wb3J0IHsgcGVlckRlcGVuZGVuY2llcyB9IGZyb20gJy4vcGFja2FnZS5qc29uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCgpID0+IHtcclxuICBjb25zdCBpc1N0b3J5Ym9va0J1aWxkID0gcHJvY2Vzcy5lbnYuQlVJTERfU1RPUllCT09LID09PSAndHJ1ZSdcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgcmVhY3Qoe1xyXG4gICAgICAgIGJhYmVsOiB7XHJcbiAgICAgICAgICBwbHVnaW5zOiBbWydiYWJlbC1wbHVnaW4tc3R5bGVkLWNvbXBvbmVudHMnLCB7IGRpc3BsYXlOYW1lOiBmYWxzZSB9XV0sXHJcblxyXG4gICAgICAgICAgZW52OiB7XHJcbiAgICAgICAgICAgIGRldmVsb3BtZW50OiB7XHJcbiAgICAgICAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgICAgICAgWydiYWJlbC1wbHVnaW4tc3R5bGVkLWNvbXBvbmVudHMnLCB7IGRpc3BsYXlOYW1lOiB0cnVlIH1dLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgICB0c2NvbmZpZ1BhdGhzKCksXHJcbiAgICAgICFpc1N0b3J5Ym9va0J1aWxkICYmXHJcbiAgICAgICAgZHRzKHtcclxuICAgICAgICAgIGluY2x1ZGU6IFsnc3JjLyddLFxyXG4gICAgICAgICAgZXhjbHVkZTogWydzcmMvZGVjbGFyYXRpb24vc3R5bGVkLmQudHMnXSxcclxuICAgICAgICAgIHJvbGx1cFR5cGVzOiB0cnVlLFxyXG4gICAgICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcclxuICAgICAgICAgIHRzQ29uZmlnRmlsZVBhdGg6ICcuL3RzY29uZmlnLmpzb24nLFxyXG4gICAgICAgIH0pLFxyXG4gICAgXS5maWx0ZXIoQm9vbGVhbiksXHJcbiAgICBwdWJsaWNEaXI6IGZhbHNlLFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgc291cmNlbWFwOiB0cnVlLFxyXG4gICAgICBvdXREaXI6ICdkaXN0JyxcclxuICAgICAgbWluaWZ5OiAndGVyc2VyJyxcclxuICAgICAgdGVyc2VyT3B0aW9uczoge1xyXG4gICAgICAgIGNvbXByZXNzOiB7XHJcbiAgICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXHJcbiAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpYjoge1xyXG4gICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9tYWluLnRzJyksXHJcbiAgICAgICAgbmFtZTogJ2plbmVzZWktdWktcmVhY3QnLFxyXG4gICAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXHJcbiAgICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBqZW5lc2VpLXVpLXJlYWN0LiR7Zm9ybWF0fS5qc2AsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICBleHRlcm5hbDogT2JqZWN0LmtleXMocGVlckRlcGVuZGVuY2llcyksXHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICBzb3VyY2VtYXA6IHRydWUsXHJcbiAgICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICAgICdzdHlsZWQtY29tcG9uZW50cyc6ICdzdHlsZWQnLFxyXG4gICAgICAgICAgICAncmVhY3QtcmlwcGxlLWNsaWNrJzogJ3JlYWN0UmlwcGxlQ2xpY2snLFxyXG4gICAgICAgICAgICAnc3R5bGVkLXJlc2V0JzogJ3Jlc2V0JyxcclxuICAgICAgICAgICAgcmVhY3Q6ICdSZWFjdCcsXHJcbiAgICAgICAgICAgICdyZWFjdC1sb2FkaW5nJzogJ1JlYWN0TG9hZGluZycsXHJcbiAgICAgICAgICAgICdyZWFjdC1udW1iZXItZm9ybWF0JzogJ3JlYWN0TnVtYmVyRm9ybWF0JyxcclxuICAgICAgICAgICAgJ0B0YW5zdGFjay9yZWFjdC12aXJ0dWFsJzogJ3JlYWN0VmlydHVhbCcsXHJcbiAgICAgICAgICAgIGdzYXA6ICdnc2FwJyxcclxuICAgICAgICAgICAgJ2pzLWNvb2tpZSc6ICdDb29raWVzJyxcclxuICAgICAgICAgICAgJ3JlYWN0LWkxOG5leHQnOiAncmVhY3RJMThuZXh0JyxcclxuICAgICAgICAgICAgJ3JlYWN0LWhlbG1ldCc6ICdyZWFjdEhlbG1ldCcsXHJcbiAgICAgICAgICAgICdyZWFjdC10b2dnbGUnOiAnUmVhY3RUb2dnbGUnLFxyXG4gICAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfVxyXG59KVxyXG4iLCAie1xyXG4gIFwiYXV0aG9yXCI6IFwiQ3lyaWwgU3Ryb25lXCIsXHJcbiAgXCJuYW1lXCI6IFwiQGplbmVzZWktc29mdHdhcmUvamVuZXNlaS11aS1yZWFjdFwiLFxyXG4gIFwidmVyc2lvblwiOiBcIjAuNC40MVwiLFxyXG4gIFwicmVwb3NpdG9yeVwiOiB7XHJcbiAgICBcInR5cGVcIjogXCJnaXRcIixcclxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9qZW5lc2VpLXNvZnR3YXJlL2plbmVzZWktdWktcmVhY3QuZ2l0XCJcclxuICB9LFxyXG4gIFwibWFpblwiOiBcIi4vZGlzdC9qZW5lc2VpLXVpLXJlYWN0LnVtZC5qc1wiLFxyXG4gIFwibW9kdWxlXCI6IFwiLi9kaXN0L2plbmVzZWktdWktcmVhY3QuZXMuanNcIixcclxuICBcInR5cGVzXCI6IFwiLi9kaXN0L21haW4uZC50c1wiLFxyXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxyXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxyXG4gIFwiZmlsZXNcIjogW1xyXG4gICAgXCJkaXN0XCJcclxuICBdLFxyXG4gIFwia2V5d29yZHNcIjogW1xyXG4gICAgXCJyZWFjdFwiLFxyXG4gICAgXCJ1aVwiLFxyXG4gICAgXCJ0YW5zdGFja1wiLFxyXG4gICAgXCJnc2FwXCIsXHJcbiAgICBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuICBdLFxyXG4gIFwiZXhwb3J0c1wiOiB7XHJcbiAgICBcIi5cIjoge1xyXG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9qZW5lc2VpLXVpLXJlYWN0LmVzLmpzXCIsXHJcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9qZW5lc2VpLXVpLXJlYWN0LnVtZC5qc1wiLFxyXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L21haW4uZC50c1wiXHJcbiAgICB9XHJcbiAgfSxcclxuICBcInNjcmlwdHNcIjoge1xyXG4gICAgXCJidWlsZFwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkIC0tbW9kZSBidWlsZFwiLFxyXG4gICAgXCJzdG9yeWJvb2tcIjogXCJzdG9yeWJvb2sgZGV2IC1wIDYwMDZcIixcclxuICAgIFwiYnVpbGQtc3Rvcnlib29rXCI6IFwiY3Jvc3MtZW52IEJVSUxEX1NUT1JZQk9PSz10cnVlIHN0b3J5Ym9vayBidWlsZCAtLXF1aWV0IC0tZGlzYWJsZS10ZWxlbWV0cnlcIixcclxuICAgIFwiZm9ybWF0XCI6IFwicHJldHRpZXIgLS13cml0ZSAnc3JjLyovKi57dHMsdHN4fSdcIlxyXG4gIH0sXHJcbiAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcclxuICAgIFwiQGVtb3Rpb24vc3R5bGVkXCI6IFwiXjExLjExLjVcIixcclxuICAgIFwiQHRhbnN0YWNrL3JlYWN0LWZvcm1cIjogXCJeMC4zMS4wXCIsXHJcbiAgICBcIkB0YW5zdGFjay9yZWFjdC12aXJ0dWFsXCI6IFwiXjMuNS4xXCIsXHJcbiAgICBcIkB0YW5zdGFjay96b2QtZm9ybS1hZGFwdGVyXCI6IFwiXjAuMzEuMFwiLFxyXG4gICAgXCJAdHlwZXMvanMtY29va2llXCI6IFwiXjMuMC42XCIsXHJcbiAgICBcIkB0eXBlcy9yZWFjdC1oZWxtZXRcIjogXCJeNi4xLjExXCIsXHJcbiAgICBcImNvdW50cnktbGlzdC13aXRoLWRpYWwtY29kZS1hbmQtZmxhZ1wiOiBcIl41LjAuNVwiLFxyXG4gICAgXCJnc2FwXCI6IFwiXjMuMTIuNVwiLFxyXG4gICAgXCJqcy1jb29raWVcIjogXCJeMy4wLjVcIixcclxuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXHJcbiAgICBcInJlYWN0LWN1cnJlbmN5LWlucHV0LWZpZWxkXCI6IFwiXjMuOC4wXCIsXHJcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIixcclxuICAgIFwicmVhY3QtaGVsbWV0XCI6IFwiXjYuMS4wXCIsXHJcbiAgICBcInJlYWN0LWhvb2stZm9ybVwiOiBcIl43LjQ5LjNcIixcclxuICAgIFwicmVhY3QtaTE4bmV4dFwiOiBcIl4xNS4wLjBcIixcclxuICAgIFwicmVhY3QtbG9hZGluZ1wiOiBcIl4yLjAuM1wiLFxyXG4gICAgXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI6IFwiXjMuNC4wXCIsXHJcbiAgICBcInJlYWN0LW51bWJlci1mb3JtYXRcIjogXCJeNS4zLjRcIixcclxuICAgIFwicmVhY3QtcmlwcGxlLWNsaWNrXCI6IFwiXjEuMy4wXCIsXHJcbiAgICBcInJlYWN0LXRvZ2dsZVwiOiBcIl40LjEuM1wiLFxyXG4gICAgXCJzdHlsZWQtY29tcG9uZW50c1wiOiBcIj49IDVcIixcclxuICAgIFwic3R5bGVkLXJlc2V0XCI6IFwiXjQuNS4yXCIsXHJcbiAgICBcInpvZFwiOiBcIl4zLjIzLjhcIlxyXG4gIH0sXHJcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgXCJAY2hyb21hdGljLWNvbS9zdG9yeWJvb2tcIjogXCJeMS4zLjFcIixcclxuICAgIFwiQGZvbnRzb3VyY2UvaW50ZXJcIjogXCJeNS4wLjE2XCIsXHJcbiAgICBcIkByb2xsdXAvcGx1Z2luLXR5cGVzY3JpcHRcIjogXCJeMTEuMS42XCIsXHJcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tZXNzZW50aWFsc1wiOiBcIl44LjAuNlwiLFxyXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWludGVyYWN0aW9uc1wiOiBcIl44LjAuNlwiLFxyXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWxpbmtzXCI6IFwiXjguMC42XCIsXHJcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tb25ib2FyZGluZ1wiOiBcIl44LjAuNlwiLFxyXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLXRoZW1lc1wiOiBcIl44LjAuNlwiLFxyXG4gICAgXCJAc3Rvcnlib29rL2Jsb2Nrc1wiOiBcIl44LjAuNlwiLFxyXG4gICAgXCJAc3Rvcnlib29rL2VzbGludC1jb25maWctc3Rvcnlib29rXCI6IFwiXjQuMC4wXCIsXHJcbiAgICBcIkBzdG9yeWJvb2svcmVhY3RcIjogXCJeOC4wLjZcIixcclxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdC12aXRlXCI6IFwiXjguMC42XCIsXHJcbiAgICBcIkBzdG9yeWJvb2svdGVzdFwiOiBcIl44LjAuNlwiLFxyXG4gICAgXCJAdHJpdmFnby9wcmV0dGllci1wbHVnaW4tc29ydC1pbXBvcnRzXCI6IFwiXjQuMy4wXCIsXHJcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjExLjIwXCIsXHJcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4yLjc0XCIsXHJcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMi4xOVwiLFxyXG4gICAgXCJAdHlwZXMvcmVhY3QtdG9nZ2xlXCI6IFwiXjQuMC41XCIsXHJcbiAgICBcIkB0eXBlcy9zdHlsZWQtY29tcG9uZW50c1wiOiBcIl41LjEuMzRcIixcclxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNy4xOC4wXCIsXHJcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJeNy4xOC4wXCIsXHJcbiAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI6IFwiXjQuMi4xXCIsXHJcbiAgICBcImJhYmVsLXBsdWdpbi1zdHlsZWQtY29tcG9uZW50c1wiOiBcIl4yLjEuNFwiLFxyXG4gICAgXCJjcm9zcy1lbnZcIjogXCJeNy4wLjNcIixcclxuICAgIFwiZXNsaW50XCI6IFwiXjguNTcuMFwiLFxyXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjcuMzUuMFwiLFxyXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0LWhvb2tzXCI6IFwiXjQuNi4yXCIsXHJcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtcmVmcmVzaFwiOiBcIl4wLjQuNVwiLFxyXG4gICAgXCJlc2xpbnQtcGx1Z2luLXN0b3J5Ym9va1wiOiBcIl4wLjguMFwiLFxyXG4gICAgXCJwcmV0dGllclwiOiBcIl4zLjEuMVwiLFxyXG4gICAgXCJyZWFjdC1kb2NnZW4tdHlwZXNjcmlwdC1wbHVnaW5cIjogXCJeMS4wLjZcIixcclxuICAgIFwicm9sbHVwLXBsdWdpbi10eXBlc2NyaXB0LXBhdGhzXCI6IFwiXjEuNS4wXCIsXHJcbiAgICBcInN0b3J5Ym9va1wiOiBcIl44LjAuNlwiLFxyXG4gICAgXCJ0c2xpYlwiOiBcIl4yLjYuMlwiLFxyXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuNS40XCIsXHJcbiAgICBcInZpdGVcIjogXCJeNC4zLjlcIixcclxuICAgIFwidml0ZS1wbHVnaW4tYnVuZGxlLWFuYWx5emVyXCI6IFwiXjAuMC4xXCIsXHJcbiAgICBcInZpdGUtcGx1Z2luLWR0c1wiOiBcIl4yLjMuMFwiLFxyXG4gICAgXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI6IFwiXjQuMi4wXCJcclxuICB9LFxyXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcclxuICAgIFwiYXdlc29tZS1waG9uZW51bWJlclwiOiBcIl43LjAuMVwiLFxyXG4gICAgXCJtb21lbnRcIjogXCJeMi4zMC4xXCJcclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrWCxPQUFPLFdBQVc7QUFDcFksT0FBTyxRQUFRLGVBQWU7QUFDOUIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sbUJBQW1COzs7QUNnQ3hCLHVCQUFvQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLHdCQUF3QjtBQUFBLEVBQ3hCLDJC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
