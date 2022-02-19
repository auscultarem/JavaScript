const express = require('express');

const app = express();

app.get("/", function(req, res){
    response.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: auscultarem@gmail.com");
});

app.get("/about", function(req, res){
    res.send("Hello, My name is Jesus Castellanos and I'm leaning node.js");
});


app.listen(3000, function() {
    console.log("served strated on port 3000");
});