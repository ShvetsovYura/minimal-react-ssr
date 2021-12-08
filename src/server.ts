import { resolve } from "path";
import express, { Express } from "express";
import { ssrHtmlRenderMiddleware } from "ssrHtmlRenderMiddleware";
import compression from "compression";

const app: Express = express();

if (process.env.NODE_ENV === "development") {
  app.use(compression());
}

app
  .use(express.static(resolve(__dirname, "../dist")))
  .use(express.static(resolve(__dirname, "../static")));

app.get("/*", ssrHtmlRenderMiddleware);

export { app };
