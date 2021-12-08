import { Configuration, DllPlugin } from "webpack";
import { DIST_DIR, IS_DEV, SRC_DIR } from "./env";
import { VENDORS } from "./vendors";
import { join, resolve } from "path";
import AssetsPlugin from "assets-webpack-plugin";

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
    new AssetsPlugin({
      path: resolve(SRC_DIR),
      removeFullPathAutoPrefix: true,
      filename: "vendors-assets.json",
    }),
  ],
};
