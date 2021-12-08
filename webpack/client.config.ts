import { Configuration, DllReferencePlugin } from "webpack";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { join, resolve } from "path";
import { DIST_DIR, IS_DEV, SRC_DIR } from "./env";
import { css } from "./loaders/css";
import { ts } from "./loaders/ts";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import AssetsPlugin from "assets-webpack-plugin";

export const clientConfig: Configuration = {
  entry: [join(SRC_DIR, "index.tsx")],
  mode: IS_DEV ? "development" : "production",
  module: {
    rules: [css.client, ts.client],
  },
  output: {
    path: DIST_DIR,
    filename: "[name]_[fullhash].js",
    publicPath: "/",
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  plugins: [
    new DllReferencePlugin({
      context: join(DIST_DIR, ".."),
      manifest: join(DIST_DIR, "vendors", "vendors-manifest.json"),
    }),
    new MiniCssExtractPlugin({ filename: "[name]_[fullhash].css" }),
    new AssetsPlugin({ path: resolve(SRC_DIR), filename: "assets.json" }),
  ],
  devtool: "source-map",
  performance: {
    hints: IS_DEV ? false : "error",
  },
};
