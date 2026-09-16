const apiRoute = require("express").Router(); // import
const multer = require("multer");
const {
  UserControllerHome,
  UserControllerBlogs,
  UserControllerCreateAccount,
} = require("../controllers/apis/users.api.controller");

const storage = multer.diskStorage({
  destination(request, file, callback) {
    callback(null, "uploads/");
  },
  filename(request, file, callback) {
    let timeStamp = Date.now();
    let _fileName =
      timeStamp + "-" + file.originalname.toLowerCase().split(" ").join("-");

    callback(null, _fileName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 100,
  },
});

apiRoute.get("/", UserControllerHome);

apiRoute.get("/blogs", UserControllerBlogs);

// client (postman) === request ===> server (express js)
apiRoute.post(
  "/create-account",
  upload.single("resume"),
  UserControllerCreateAccount,
);

// export the router
module.exports = apiRoute;
