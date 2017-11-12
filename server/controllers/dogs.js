var mongoose = require('mongoose');
var Dog=mongoose.model("Dog");
module.exports={
	all: function(req, res){
		Dog.find({}, function(err, dogs){
			if(err){
				dogs=[];
			}
			res.render("index", {dogs:dogs});
		});
	},
	new: function(req, res){
		dog=new Dog();
		res.render("new", {dog: dog, errors: {}});
	},
	show: function(req, res){
		Dog.findOne({_id: req.params.id}, function(err, dog){
			if(err){
				res.redirect("/");
			}else{
				res.render("show", {dog:dog});
			};
		});
	},
	create: function(req, res){
		var dog=new Dog({name: req.body.name, breed: req.body.breed});
		dog.save(function(err){
			if(err){
				res.render("new", {dog: dog, errors: dog.errors});
			}else{
				res.redirect("/dogs/"+dog._id);
			}
		});
	},
	edit: function(req, res){
		Dog.findOne({_id: req.params.id}, function(err, dog){
			if(err){
				res.redirect("/");
			}else{
				res.render("edit", {dog:dog, errors: {}});
			}
		});
	},
	update: function(req, res){
		Dog.findOne({_id: req.params.id}, function(err, dog){
			if(err){
				res.redirect("/");
			}else{
				dog.name=req.body.name;
				dog.breed=req.body.breed;
				dog.save(function(err){
					if(err){
						res.render("edit", {errors: dog.errors});
					}else{
						res.redirect("/dogs/"+req.params.id);
					};
				});
			};
		});
	},
	delete: function(req, res){
		Dog.remove({_id: req.params.id}, function(err){
			res.redirect("/");
		});
	}
}