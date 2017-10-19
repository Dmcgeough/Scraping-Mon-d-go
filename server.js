//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000; 


var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"))


require("./controller/api-routes/")(app);
require("./controller/html-routes/")(app);

mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/scraper_db");
// var db = mongoose.connection;

// db.on("error", function(error) {
//   console.log("Mongoose Error: ", error);
// });

// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});