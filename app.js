
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var friends = ["Venudhari Gopesha Das", "Ajay Reddy", "Naveena Govinda Das", "Amritesha Janardhana Das", "Manish", "Arun Kumar"];

app.use(bodyParser.urlencoded({extended: true}));  
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("<h1 style=\'color: purple\'> Welcome to your friends list </h1>")
});

app.get("/friends", function(req, res) {
   res.render("friends", {friends: friends}); 
});

app.post("/addfriend", function(req, res) {
  var friend = req.body.friend; 
  if (!(/^\s*$/).test(friend) && typeof friend == "string") {
    friends.push(friend);
  } else { 
      
  }
  res.redirect("/friends");
});

app.get("*", function(req, res) {
  res.send("<p style=\'color: red\'> <strong> This is an invalid request. Request with \'/friends\' at the end of the path </strong> </p>");  
});


app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Serving your app..."); 
});