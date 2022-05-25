var mongoose = require("mongoose");

var dataSchema = mongoose.Schema({
  username: String,
	id: Number,
	name: String,
	ingredients: String,
	instructions: String,
	allergies: Array,
	diet: Array,
	filename2: String
});

var Data = mongoose.model("Info",dataSchema);



module.exports = Data;
