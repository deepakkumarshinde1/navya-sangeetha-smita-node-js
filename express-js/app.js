const express = require("express");
const mainRouter = require("./routes/main.routes");
const apiRoute = require("./routes/api.routes");
const app = express();

app.use(express.json()); // json
app.use(express.urlencoded({ extended: false })); // x-www-form-urlencoded

// use function [middleware] in express
app.use("/", mainRouter); // "/"
app.use("/api", apiRoute); // "/api"

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
