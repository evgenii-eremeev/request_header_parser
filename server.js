var express = require("express");

var app = express();

app.get('/', function(req, res) {
  res.send("All good!");
});

app.listen(8080, function() {
  console.log("App running at https://request-header-parser-jaycrypto.c9users.io");
})
