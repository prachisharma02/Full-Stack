var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://0.0.0.0:27017/fs_stud_lab2";
MongoClient.connect(url, function (err, dbClient) {
  if (err) throw err;
  var dbo = dbClient.db("NewMomgo");
  var myobj = { name: "Prachi", roll: 49, course: "MCA", address: "Delhi" };
  dbo.collection("learning").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document Inserted!");
    dbClient.close();
  });
});
