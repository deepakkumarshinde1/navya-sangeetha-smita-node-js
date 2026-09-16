const apiRoute = require("express").Router(); // import
const multer = require("multer");

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

apiRoute.get("/", (req, res) => {
  res.send({ message: "Welcome to the API" });
});

apiRoute.get("/blogs", (req, res) => {
  res.send({ message: "this are blog list" });
});

// client (postman) === request ===> server (express js)
apiRoute.post(
  "/create-account",
  upload.single("resume"),
  (request, response) => {
    let data = request.body;
    response.send({ message: "account created successfully", data });
  },
);

// export the router
module.exports = apiRoute;
