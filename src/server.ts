import { resolve } from "path";
import express, { Express, Request, Response, NextFunction } from "express";
import { ssrHtmlRenderMiddleware } from "ssrHtmlRenderMiddleware";
import compression from "compression";

const app: Express = express();

if (process.env.NODE_ENV === "development") {
  app.use(compression());
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.set("Cache-Control", "no-store");
    next();
  });
}

app
  .use(express.static(resolve(__dirname, "../dist")))
  .use(express.static(resolve(__dirname, "../static")));

app.get("/*", ssrHtmlRenderMiddleware);

export { app };
