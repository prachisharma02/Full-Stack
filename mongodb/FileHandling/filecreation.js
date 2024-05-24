var fs = require("fs");
var data = "helllo";
fs.writeFile("newFile.txt", data, function (err) {
  if (err) throw err;
  console.log("file created");
});
