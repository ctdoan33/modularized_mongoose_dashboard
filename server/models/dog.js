var mongoose = require('mongoose');
var DogSchema=new mongoose.Schema({
	name: {type: String, required: true},
	breed: {type: String, required: true}
});
mongoose.model("Dog", DogSchema);