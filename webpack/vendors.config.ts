import { Configuration, DllPlugin } from "webpack";
import { DIST_DIR, IS_DEV } from "./env";
import { VENDORS } from "./vendors";
import { join } from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  mode: IS_DEV ? "development" : "production",
  target: "web",
  devtool: "source-map",
  entry: {
    vendors: VENDORS,
  },
  output: {
    library: "[name]_[fullhash]",
    path: join(DIST_DIR, "vendors"),
    filename: "[name]_[fullhash].js",
  },
  plugins: [
    new DllPlugin({
      path: join(DIST_DIR, "vendors", "vendors-manifest.json"),
      name: "[name]_[fullhash]",
    }),
    new MiniCssExtractPlugin({ filename: "[name]_[fullhash].css" }),
  ],
};
