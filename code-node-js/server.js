const http = require("http"); // module
const fs = require("fs"); // module

// request => Client to server.
// response => Server to client.
const server = http.createServer((request, response) => {
  // data from file
  fs.readFile("index1.html", (error, data) => {
    if (error) {
      response.write("<h1>File not found</h1>");
    } else {
      response.write(data);
    }
    response.end();
  });
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
