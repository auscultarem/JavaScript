//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
	res.sendFile(__dirname + "/signup.html" )
});


app.post("/", function(req, res){

	const firstName = req.body.fName;
	const lastName = req.body.lName;
	const email = req.body.email;
	
	// console.log( firstName, lastName, email);
	// thi is the data that we will send to mailchimp
	const data = {
		members: [
			{
				email_address:email,
				status:"subscribed",
				merge_fields:{
					 FNAME: firstName,
					 LNAME: lastName,
				}
			}
		]
	};

	const jsonData = JSON.stringify(data); //turn the data into a sring

	const url = "http://us14.api.mailchimp.com/3.0/list/1c02e3c874";

	const options = {
		method:"post",
		auth:"Jesus1:a8406ac2426e63e24609cac02d673249-us14",
	}

	const request = https.request(url, options, function(response){

		if (response.statusCode === 200) {
			res.sendFile(__dirname + "/success.html");
		}
		else {
			res.sendFile(__dirname + "/failure.html");
		}
				response.on("data", function(data){
				console.log(JSON.parse(data));
		});
	});

	request.write(jsonData);	
	request.end();

});

app.post("/failure", function(){
	res.redirect("/");
});


//local hhost 3000
app.listen(process.env.PORT || 3000, function(){
	console.log("Server is running on port 3000");
});

// Apikey
// a8406ac2426e63e24609cac02d673249-us14

// list IDBCursor
// 1c02e3c874