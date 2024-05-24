var fs = require("fs");
//var data = "helllo myself prachi";
fs.readFile("newFile.txt", function (err, data) {
  if (err) throw err;
  console.log(data.toString("utf-8"));
});
