import express from "express";
import * as path from "path";
import fs from "fs";
import * as entry from "./server/bundle";

const app = express();
const port = 3202;
app.use("/static", express.static(path.resolve(__dirname, "./client/static")));
app.get("*", (req, res) => {
  console.log(req.path);
  fs.readFile(
    path.resolve(__dirname, "./client/index.html"),
    "utf8",
    (err, data) => {
      res
        .status(200)
        .send(
          data.replace(
            /<div id=\"root\"><\/div>/,
            `<div id="root">${entry.renderToString(req.path)}</div>`
          )
        );
    }
  );
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
