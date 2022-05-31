let path = require("path");
let express = require("express");
var formidable = require('formidable');
var mv = require('mv');
var passport = require("passport");

var User = require("./models/user");
//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
let router = express.Router();


//request is info sending to server from client.
//response is info sending to client from server.

let index = 0

let filename2;

const myDatabase = require('./myDatabase');
let db = new myDatabase();

const Data = require('./Data');

router.post('/fileupload', function(req, res) {
    console.log("router.post fileupload");
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.image.path;
        var newpath = __dirname + '/public/images/' + files.image.name;
        console.log('Received image: ' + files.image.name);
        mv(oldpath, newpath, function (err) {
//            if (err) throw err;
            if (err)
                res.json({error:true});
            else
            {
                res.json({error:false,filename2:files.image.name});
            }
        });
    });
});


router.post('/create', function(req, res){
if (req.isAuthenticated()) {
    index++

    let identifier = index


    let name = req.body.name.trim();
    if (name == "") {
        res.json({error:true});
        return;
    }

    let ingredients = req.body.ingredients;
    if (req.body.ingredients.trim() == "") {
        res.json({error:true});
        return;
    }

    let instructions = req.body.instructions;
    if (req.body.instructions.trim() == "") {
        res.json({error:true});
        return;
    }

    let allergies = req.body.allergies;
    let diet = req.body.diet;

    filename2 = req.body.filename2;

    let obj = new Data(identifier,req.user.username,name,ingredients,instructions,allergies,diet,filename2);
    return(db.postData(obj,res));
  }
  else {
    res.json(null)
  }

});


router.get('/read', function(req, res){
        db.getData(res);
});

router.put('/update', function(req, res){

        let allergies1 = req.body.allergies;
        let diet = req.body.diet;


      let val=[];
      for(let i=0;i<db.data.length+1;i++)
      {
          val[i] = db.getData(i+1);

      }


      val = val.filter(checkFilter());

    function checkFilter() {
      for(let i = 0; i < db.data.length+1; i++){
        let data = db.getData(i)

        console.log(db.getData(i))
        for (let i = 0; i < allergies1.length; i++)
        if(data.allergies.includes(allergies1[i])){
          return db.getData(i)
        }
      }
      res.json({error:false});
    }

router.get("/userInfo",function(req,res){
  console.log("get userInfo");
  if (req.isAuthenticated()) {
  console.log("req isAuthenticated");
  console.log("valueJY = " + req.user.valueJY);    /* user defined value */
    return(db.getData(req.user.username,res),req.user.username);
   // res.json({username:req.user.username});
  }
  else {
  console.log("req is not Authenticated");
    res.json(null);
  }
});




    /*
    if (val)
        res.json({error:false});
    else
        res.json({error:true});
        */

});
/*
router.delete('/delete/:identifier', function(req, res){
    let trimIdentifier = req.params.identifier.trim();
    if (trimIdentifier == "") {
        res.json({error:true});
        return;
    }

    let identifier = Number(trimIdentifier);
    if (Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }

    let val = db.deleteData(identifier);
    if (val == null)
        res.json({error:true});
    else
        res.json({error:false});

});
*/

module.exports = router;
