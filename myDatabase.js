var express = require("express");
var mongoose = require("mongoose");
var DataModel = require("./models/Data");
const Data = require('./Data');

let myDatabase = function() {
}



myDatabase.prototype.postData = function(data,res) {
  let obj = {id:data.id, name:data.name, ingredients:data.ingredients, instructions:data.instructions, allergies: data.allergies, diet:data.diet,filename2:data.filename2};
  DataModel.create(obj,function(error,info) {
      if (error) {
          return res.json({error:true});
      }
      return res.json({error:false});
  });
}

myDatabase.prototype.getData = function(name,res) {

  DataModel.find({id:data.id},function(error,info) {
      if (error) {
          return res.json({error:true});
      }
      else if (info == null) {
          return res.json({error:true});
      }
      if (info.length == 1)
          return res.json({error:false,name:info[0].name,ingredients:info[0].ingredients, instructions:info[0].instructions, allergies: info[0].allergies, diet:info[0].diet,filename2:info[0].filename2});
      else
          return res.json({error:true});
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
