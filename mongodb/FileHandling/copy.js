var fs = require("fs");
fs.copyFile("newFile.txt", "newFile1.txt", function (err, data) {
  if (err) throw err;
  console.log("copied");
});
