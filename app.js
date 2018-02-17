//conecxion en express
var express = require("express");

var app=express();
app.set("view engine","jade");

app.get("/", function (request, response){
	response.render("index", {hola:"hola jorge"});
  });
app.listen(3000);