const express = require("express");
const mainRouter = require("./routes/main.routes");
const app = express();

// use function [middleware] in express
app.use(mainRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
