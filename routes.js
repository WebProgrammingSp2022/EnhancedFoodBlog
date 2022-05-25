let path = require("path");
var passport = require("passport");
let express = require("express");
var formidable = require('formidable');
var mv = require('mv');
var User = require("./models/user");
//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
let router = express.Router();

//request is info sending to server from client.
//response is info sending to client from server.

router.use(function(req, res, next) {
  res.locals.currentUserjy = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});

router.get("/successroot", function(req, res) {
console.log("get successroot");
  res.json({redirect:"/"});
});

router.get("/failroot", function(req, res) {
console.log("get failroot");
  res.json({redirect:"/login"});
});

router.get("/successsignup", function(req, res) {
console.log("get successsignup");
  res.json({redirect:"/session"});
});

router.get("/failsignup", function(req, res) {
console.log("get failsignup");
  res.json({redirect:"/login"});
});

router.get("/successlogin", function(req, res) {
console.log("get successlogin");
  res.json({redirect:"/session"});
});
router.get("/faillogin", function(req, res) {
console.log("get failsignup");
  res.json({redirect:"/login"});

});

router.get("/", function(req, res, next) {
console.log("get root");
  let thePath = path.resolve(__dirname,"public/views/main.html");
  res.sendFile(thePath);
});

router.get("/list", function(req, res, next) {
console.log("get root");
  let thePath = path.resolve(__dirname,"public/views/list.html");
  res.sendFile(thePath);
});

router.get("/upload", function(req, res, next) {
console.log("get root");
  let thePath = path.resolve(__dirname,"public/views/upload.html");
  res.sendFile(thePath);
});

router.get("/signup", function(req, res, next) {
console.log("get root");
  let thePath = path.resolve(__dirname,"public/views/signup.html");
  res.sendFile(thePath);
});

router.get("/login", function(req, res, next) {
console.log("get root");
  let thePath = path.resolve(__dirname,"public/views/login.html");
  res.sendFile(thePath);
});


router.get("/session", function(req, res) {
  console.log("get session");
  if (req.isAuthenticated()) {
    console.log("sendFile session.html")
  let thePath = path.resolve(__dirname,"public/views/upload.html");
  res.sendFile(thePath);
  } else {
    console.log("sendFile login.html")
    let thePath = path.resolve(__dirname,"public/views/login.html");
  res.sendFile(thePath);
  }
});

router.get("/logout", function(req, res) {
  console.log("get logout")
  if (req.isAuthenticated()) {
  console.log("req isAuthenticated");
    req.logout();
    res.redirect("/successroot");
  } else {
  console.log("req is not Authenticated");
    res.redirect("/failroot");
  }
});

router.post("/signup", function(req, res, next) {
console.log("post signup");

  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username }, function(err, user) {
console.log("User findOne function callback")
    if (err)
    {
      console.log("err");
      return next(err);
    }
    if (user) {
      console.log("user")
      req.flash("error", "User already exists");
      return res.redirect("/failsignup");
    }
console.log("new User")
    var newUser = new User({
      username: username,
      password: password
    });
    newUser.save(next);    //goes to user.js (userSchema.pre(save))
  });


}, passport.authenticate("login", {       //goes to setuppassport.js  (passport.use("login"))
  successRedirect: "/successsignup",
  failureRedirect: "/failsignup",
  failureFlash: true
}));




router.post("/login", passport.authenticate("login", {
  successRedirect: "/successlogin",
  failureRedirect: "/faillogin",
  failureFlash: true
}));

module.exports = router;
