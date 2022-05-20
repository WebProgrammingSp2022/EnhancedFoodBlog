var mongoose = require("mongoose");

var Data = mongoose.model("Info",{
	id: Number,
	name: String,
	ingredients: String,
	instructions: String,
	allergies: Array,
	diet: Array,
	filename2: String
});



module.exports = Data;
