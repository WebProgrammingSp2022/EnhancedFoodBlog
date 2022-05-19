var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var express = require("express");

var mongoose = require("mongoose");
var passport = require("passport");
var path = require("path");
var session = require("express-session");
var flash = require("connect-flash");

var setUpPassport = require("./setuppassport");
var routes = require("./routes");
var routesData = require("./routesData");


var app = express();


app.use(flash());

app.use('/favicon.ico', express.static('favicon.png'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/js', express.static('./public/js'));
app.use('/views', express.static('./public/views'));
app.use('/', express.static('./public'));

app.use(bodyParser.urlencoded({ extended: true }));   //added
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/seeds"); //change localhost to 127.0.0.1 
setUpPassport();
app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, "public")));

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: "LUp$Dg?,I#i&owP3=9su+OB%`JgL4muLF5YJ~{;t",
  resave: true,
  saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
app.use(routesData);    //added

app.listen(app.get("port"), function() {
  console.log("Server started on port " + app.get("port"));
});
//var port = process.env.PORT || 3000;
