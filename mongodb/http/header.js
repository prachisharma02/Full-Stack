const http = require("http");
const host = "localhost";
const port = 8080;
const requestListener = function (req, res) {
  res.setHeader("content-type", "application/JSON");
  res.writeHead(200);
  res.end("this is my json file!!");
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`);
});
