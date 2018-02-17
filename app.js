//conecxion en express
var express = require("express");

var app=express();

app.get("/", function (request, response){
	response.send("hello word");
} );

app.listen(3000);