const {
  Homepage,
  AboutPage,
  ProjectPage,
} = require("../controllers/main.controller");

const mainRouter = require("express").Router(); // import

mainRouter.get("/", Homepage);

mainRouter.get("/about", AboutPage);

mainRouter.get("/project", ProjectPage);

// export the router
module.exports = mainRouter;
