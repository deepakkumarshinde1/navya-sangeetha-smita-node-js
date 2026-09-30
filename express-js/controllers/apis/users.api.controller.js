const UserModel = require("../../models/user.model");

const UserControllerHome = (req, res) => {
  res.send({ message: "Welcome to the API" });
};

const UserControllerBlogs = (req, res) => {
  res.send({ message: "this are blog list" });
};

const UserControllerCreateAccount = async (request, response) => {
  try {
    let { username, password, email } = request.body;
    let newUser = new UserModel({
      username,
      password,
      email,
    });
    await newUser.save();
    response.send({ message: "account created successfully" });
  } catch (error) {
    response
      .status(500)
      .send({ message: "Error creating account", error: error.message });
  }
};

const UserControllerMakeLogin = async (request, response) => {
  try {
    let { username, password } = request.body;
    let result = await UserModel.findOne({
      username: username,
      password: password,
    });
    if (result) {
      response.send({ message: "login successful" });
    } else {
      response.status(401).send({ message: "Invalid username or password" });
    }
  } catch (error) {
    response
      .status(500)
      .send({ message: "Server error", error: error.message });
  }
};
module.exports = {
  UserControllerHome,
  UserControllerCreateAccount,
  UserControllerBlogs,
  UserControllerMakeLogin,
};
