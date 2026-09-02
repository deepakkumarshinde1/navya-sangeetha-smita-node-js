const Homepage = (request, response) => {
  response.send("Hello and welcome to express js");
};

const AboutPage = (request, response) => {
  response.send("This is about page");
};

const ProjectPage = (request, response) => {
  response.send("This is project page");
};

module.exports = {
  Homepage,
  AboutPage,
  ProjectPage,
};
