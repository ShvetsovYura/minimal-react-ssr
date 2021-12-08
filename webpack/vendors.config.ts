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
    library: "[name]",
    path: join(DIST_DIR, "vendors"),
    filename: "[name].js",
  },
  plugins: [
    new DllPlugin({
      path: join(DIST_DIR, "vendors", "vendors-manifest.json"),
      name: "[name]",
    }),
  ],
};
