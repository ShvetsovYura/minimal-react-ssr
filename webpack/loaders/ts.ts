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

// c ts-loader не завелось выскакивает ошибка
/**
 * dist/ssr.js:26984
const app = (0, express_1.default)();
TypeError: (0 , express_1.default) is not a function
 * 
 * 
 */
