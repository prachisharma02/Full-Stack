const http = require("http");
const host = "localhost";
const port = 8080;
const requestListener = function (req, res) {
  res.setHeader("content-type", "text/HTML");
  res.writeHead(200);
  res.end(
    "<html><body><h1>Hello</h1> Hi This is my first server creation</body></html>"
  );
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`);
});
