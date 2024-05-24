var mongo = require("mongo").mongo;
var url = "mongodb://0.0.0.0:27017";
mongo.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("hello");
  dbo.createCollectio("hi"),
    function (err, res) {
      if (err) throw err;
    };
});
