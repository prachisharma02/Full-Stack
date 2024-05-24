var fs = require("fs");
var data = "helllooooo";
fs.writeFile("newFile1.txt", data, function (err) {
  if (err) throw err;
  console.log("file created");
});
