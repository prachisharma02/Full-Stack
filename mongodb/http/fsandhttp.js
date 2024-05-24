const http = require("http");
const fs = require("fs");
const host = "localhost";
const port = 8080;
const requestListener = function (req, res) {
  fs.readFile(__dirname + "/example.html")
    .then((contents) => {
      res.setHeader("content-type", "text/HTML");
      res.writeHead(200);
      res.end(contents);
    })
    .catch((err) => {
      res.writeHead(500);
      res.end(err);
      return;
    });
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`);
});
