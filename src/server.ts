import { resolve } from "path";
import express, { Express } from "express";
import { ssrHtmlRenderMiddleware } from "ssrHtmlRenderMiddleware";

const app: Express = express();
app
  .use(express.static(resolve(__dirname, "../dist")))
  .use(express.static(resolve(__dirname, "../static")));

app.get("/*", ssrHtmlRenderMiddleware);

export { app };
