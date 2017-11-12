var dogs = require('../controllers/dogs.js');
module.exports=function(app){
	app.get("/", function(req, res){
		dogs.all(req, res);
	});
	app.get("/dogs/new", function(req, res){
		dogs.new(req, res);
	});
	app.get("/dogs/:id", function(req, res){
		dogs.show(req, res);
	});
	app.post("/dogs", function(req, res){
		dogs.create(req, res);
	});
	app.get("/dogs/edit/:id", function(req, res){
		dogs.edit(req, res);
	});
	app.post("/dogs/:id", function(req, res){
		dogs.update(req, res);
	});
	app.post("/dogs/destroy/:id", function(req, res){
		dogs.delete(req, res);
	});
}