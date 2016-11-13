//require mongoose
var mongoose = require('mongoose');

//mongoose.Schema as variable
var Schema = mongoose.Schema;

var ExampleSchema = new Schema({
	//define data types

	//string
	string: {
		type: String,
		trim: true,
		required: "String is required"
	},
	//number
	number: {
		type: Number,
		unique: true,
		required: true
	},
	//boolean data type
	boolean: Boolean,
	//array data type
	array: Array,
	//
})

//export the module 
module.exports = Example;

