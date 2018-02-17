var express = require("express");

var app=express();
app.set("view engine","jade");

app.get("/", function (request, response){
	response.render("index");
  });
app.post("/",function(request, response){
	response.render("form")
});

app.listen(3000);