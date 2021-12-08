export const ts = {
  client: {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: "ts-loader",
    options: {
      transpileOnly: true,
    },
  },
  ssr: {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: "ts-loader",
    options: {
      transpileOnly: true,
    },
  },
};
