var fs = require("fs");
var data = "helllo";
fs.unlink("newFile.txt", function (err) {
  if (err) throw err;
  console.log("file deletede");
});
