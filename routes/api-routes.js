//var express = require("express");

//var router = express.Router();

// Import the model (burger.js) to use its database functions.
//var burger = require("../models/burger.js");

var db = require("./../models");

module.exports = function (app) {
  // GET route for getting all of the Burger
  app.get("/", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function (dbBurger) {
      // We have access to the Burger as an argument inside of the callback function
      //res.json(dbBurger);
      var hbsObject = {
        burgers: dbBurger
      };
      res.render("index", hbsObject);
    });
  });

  app.post("/api/Burgers", function (req, res) {
    db.Burger.create({
      name: req.body.name,
      devoured: req.body.devoured
    }).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });

  app.put("/api/Burgers/:id", function (req, res) {
    db.Burger.update({
      devoured: req.body.devoured
    }, {
        where: {
          id: req.params.id
        }
      }).then(function (dbBurger) {
        res.json(dbBurger);
      });
  });

};

// Create all our routes and set up logic within those routes where required.
/* router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      Burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
}); */

/* router.post("/api/Burger", function (req, res) {
  burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
}); */
/* 
router.put("/api/Burger/:id", function (req, res) {
  var condition = `id = '${req.params.id}'`;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router; */
