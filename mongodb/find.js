var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://0.0.0.0:27017";
MongoClient.connect(url, function (err, dbClient) {
  if (err) throw err;
  var dbo = dbClient.db("FS_Mongo_Test");

  //var myobj ={studid:1234,name:"prachi",phone:8958,email:"prachips",city:"delhi"};
  dbo
    .collection("fs_stud_lab2")
    .findOne({ name: "prachi" }, function (err, result) {
      if (err) throw err;
      console.log(result.name);
      dbClient.close();
    });
});
