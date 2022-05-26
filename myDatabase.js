var express = require("express");
var mongoose = require("mongoose");
var DataModel = require("./models/Data");
const Data = require('./Data');


let myDatabase = function() {

}



myDatabase.prototype.postData = function(data,res) {
  let obj = {id:data.id, uname:data.uname, name:data.name, ingredients:data.ingredients, instructions:data.instructions, allergies: data.allergies, diet:data.diet,filename2:data.filename2};
  DataModel.create(obj,function(error,info) {
      if (error) {
          console.log("bad")
          return res.json({error:true});
      }
      return res.json({error:false});
  });
}

myDatabase.prototype.getData = function(res) {

  DataModel.find({},function(error,info) {
      if (error) {
          return res.json({recipe:null});
      }
      else if (info == null) {
          return res.json({recipe:null});
      }

      if (info.length >= 0)
      {
        //return res.json({error:false,name:info[0].name,ingredients:info[0].ingredients, instructions:info[0].instructions, allergies: info[0].allergies, diet:info[0].diet,filename2:info[0].filename2});
          return res.json({recipe:info});

      }
      else
          return res.json({recipe:null});
   });
}


/*
myDatabase.prototype.putData = function(data,res) {
  let obj = {id:data.id, name:data.name, ingredients:data.ingredients, instructions:data.instructions, allergies: data.allergies, diet:data.diet,filename2:data.filename2};
  DataModel.findOneAndUpdate({name:data.name},{grade:data.grade},function(error,oldData) {
    if (error) {
      return res.json({error:true});
    }
    else if (oldData == null) {
      return res.json({error:true});
    }
    return res.json({error:false});
  });
}
*/
/*
myDatabase.prototype.deleteData = function(ident,res) {
    DataModel.remove({ident:ident},function(error,removed) {
        if (error) {
            return res.json({error:true});
        }
        if (removed.result.n == 0)
            return res.json({error:true});
        return res.json({error:false});
    });
}
*/

module.exports = myDatabase;
