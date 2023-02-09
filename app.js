const express = require("express");
const app = express();

app.get("/gadgets", (Request, Response) => {
  Response.sendFile("./gadgets.html", { root: __dirname });
});
modules.export = app;
