const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){   

    
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;
    res.send("The result of the calculation is "+ result);
   
});

app.get("/bmiCalculator", function(req, res){

    res.sendFile(__dirname + "/BmiCalculator/bmiCalculator.html");   
    
});

app.post("/BmiCalculator", function(req, res){

    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let resultBmi = weight / (height * height);

    res.send("The BMI calculator is " + resultBmi);
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});