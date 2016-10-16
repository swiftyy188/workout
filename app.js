// npm install nodemon --save-dev
//add in json file -  "dev": "node ./node_modules/nodemon/bin/nodemon.js app.js"
//  "devDependencies": {"nodemon": "^1.10.2"}
//npm run dev to start server
var express		= require("express"),
	app			= express(),
	bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
	res.render("dashboard")
});
app.get("/2", function(req,res){
	res.render("dashboard2")
});
app.get("/3", function(req, res){
	res.render("dash3")
})

app.get("/weight", function(req, res){
	res.render("logs/weight")
});
app.get("/cardio", function(req, res){
	res.render("logs/cardio")
});

app.get("/fuel", function(req, res){
	res.render("logs/fuel")
});
















app.listen(3000, function(){
	console.log("Workout Server port 3000");
});

