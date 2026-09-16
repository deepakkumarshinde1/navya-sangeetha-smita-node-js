require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/main.routes");
const apiRoute = require("./routes/api.routes");
const app = express();

app.use(express.json()); // json
app.use(express.urlencoded({ extended: false })); // x-www-form-urlencoded

// use function [middleware] in express
app.use("/", mainRouter); // "/"
app.use("/api", apiRoute); // "/api"
const PORT = process.env.PORT || 3000;

console.log("Db is connecting ...");
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Db is connected...");
    app.listen(PORT, () => {
      console.log("server is running on port " + PORT);
    });
  })
  .catch(() => {
    console.log("Fail to connect db");
    process.exit(1);
  });
