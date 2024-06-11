const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(8000, () => {
  console.log("示例程序正在监听 8000 端口！");
});