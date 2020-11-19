import express, { Request, Response } from "express";
import React, { ReactElement } from "react";
import { renderToString } from "react-dom/server";
import { Home } from "./client/Home";

const app = express();

app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
  // this just sends the html no js
  const content = renderToString(React.createElement(Home));
  const html = ` <html> 
  <head>
 
  </head>
  <body>
  <div  id="root">${content}</div>
  <script></script>
  <script src="main-bundle.js"> </script>
  </body></html> `;
  res.send(html);
});

app.listen(4000, () => console.log("listening on port 3000"));
