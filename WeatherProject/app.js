const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){ 
    
    res.sendFile(__dirname + "/index.html");
   
});

app.post("/", function(req, res){

   
    // Se pone en constantes mis variables
    const cityName = req.body.cityName;
    const apiKey = "e636ca19fd209a4991b1c2efb5785d75";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid="+ apiKey +"&units="+units;
    //se hace el llamdo al url

    https.get(url ,function(response){

        console.log(response.statusCode);
        response.on("data", function(data){

        const weatherData = JSON.parse(data); //convierte los datos en JSON
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const weatherIcon = weatherData.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/"+ weatherIcon +"@2x.png";
        
        res.write("<h1>The temperature in "+ cityName +" is "+ temp + " degrees Celcius</h1>");
        res.write("<p>The weather is currently"+ weatherDescription + "</p>");
        res.write("<img src=" + imageURL +">");
        res.send();
        
        });

            

    });  

    

});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
})