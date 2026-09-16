const UserControllerHome = (req, res) => {
  res.send({ message: "Welcome to the API" });
};

const UserControllerBlogs = (req, res) => {
  res.send({ message: "this are blog list" });
};

const UserControllerCreateAccount = (request, response) => {
  let data = request.body;
  response.send({ message: "account created successfully", data });
};

module.exports = {
  UserControllerHome,
  UserControllerCreateAccount,
  UserControllerBlogs,
};
