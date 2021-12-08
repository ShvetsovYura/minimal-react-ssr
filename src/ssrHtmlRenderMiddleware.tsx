import { App } from "App";
import { renderToString } from "react-dom/server";
import React from "react";
import { Request, Response } from "express";

const ssrHtmlRenderMiddleware = (req: Request, res: Response) => {
  const rootJsx = <App />;
  const reactHtml = renderToString(rootJsx);
  res.status(200).send(getHtmlString(reactHtml));
};

function getHtmlString(reactJsxString: string) {
  return `
  <!DOCTYPE html>
  <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>So good</title>
        <link href="/main.css" rel="stylesheet">
    </head>
    <body>
        <div id="root">${reactJsxString}</div>
        <script src="/main.js"></script>
    </body>
  </html>
`;
}

export { ssrHtmlRenderMiddleware };
