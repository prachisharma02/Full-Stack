const http = require("http");
const host = "localhost";
const port = 8080;
const requestListener = function (req, res) {
  res.setHeader("content-type", "text/csv");
  res.writeHead(200);
  res.end(
    "id,name,email\n1,prachi,prachips2621@gmail.com\n2,garima,garima12@gmail.com"
  );
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port}`);
});
