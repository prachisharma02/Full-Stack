var http = require("http");
var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<html><body><h1>Homepage</h1><body><html>");
    res.end();
  } else if (req.url == "/student") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<html><body><h1>Homepage for student details</h1><body><html>");
    res.end();
  } else res.end("invalid request");
});
server.listen(5000);
console.log("this is node js app");
