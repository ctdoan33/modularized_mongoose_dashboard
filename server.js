var express=require("express");
var app=express();
var path=require("path");
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set("view engine", "ejs");
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(6789, function(){
    console.log("listening on port 6789");
});