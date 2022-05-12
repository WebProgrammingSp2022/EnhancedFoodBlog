var mongoose = require("mongoose");

var Data = mongoose.model("Info",{
	id: Number,
	name:{
		required:true,
		unique:true,
		type:String,
	},
    grade: Number,
		ingredients: String,
		allergies: Array,
		diet: Array,
		filename2: String
});



module.exports = Data;
