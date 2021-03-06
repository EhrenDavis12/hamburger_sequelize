var express = require("express");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/api-routes.js")(app);

db.sequelize.sync(/* { force: true } */).then(function () {
  app.listen(PORT, function () {
    console.log("App now listening at Port: " + PORT);
  });
});
