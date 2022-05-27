var mongoose = require("mongoose");

var dataSchema = mongoose.Schema({
	id: Number,
  uname: String,
	name: String,
	ingredients: String,
	instructions: String,
	allergies: Array,
	diet: Array,
	filename2: String
});

var Data = mongoose.model("Info",dataSchema);



module.exports = Data;
