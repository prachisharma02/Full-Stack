var fs = require("fs");
var data = "helllo myself prachi";
fs.appendFile("newFile.txt", data, function (err) {
  if (err) throw err;
  console.log("data inserted");
});
