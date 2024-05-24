var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://0.0.0.0:27017";
MongoClient.connect(url, function (err, dbClient) {
  if (err) throw err;
  var dbo = dbClient.db("NewMomgo");

  dbo.createCollection("learning", function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
    dbClient.close();
  });
});
