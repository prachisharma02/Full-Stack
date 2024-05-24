var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, "content-type", "application/json");
    res.end("application type");
  })
  .listen(8080);
console.log("application");
