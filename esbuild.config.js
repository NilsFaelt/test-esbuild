import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["app.tsx"],
  bundle: true,
  outfile: "dist/bundle.js",
});
