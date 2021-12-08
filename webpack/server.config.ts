import { Configuration } from "webpack";
import { join } from "path";
import { DIST_DIR, IS_DEV, SRC_DIR } from "./env";
import { css, ts } from "./loaders";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

export const serverConfig: Configuration = {
  name: "ssr",
  target: "node",
  mode: IS_DEV ? "development" : "production",
  entry: join(SRC_DIR, "server.ts"),
  module: { rules: [css.ssr, ts.ssr] },
  output: {
    filename: "ssr.js",
    libraryTarget: "commonjs2",
    path: DIST_DIR,
    publicPath: "/static/",
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  devtool: "source-map",
  performance: {
    hints: IS_DEV ? false : "warning",
  },
};
