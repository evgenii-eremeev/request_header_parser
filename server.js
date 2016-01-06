var express = require("express");
var reqparser = require("./app/controllers/reqparser");

var app = express();

app.get('/', reqparser);

app.listen(8080, function() {
    console.log("App running at https://request-header-parser-jaycrypto.c9users.io");
})
