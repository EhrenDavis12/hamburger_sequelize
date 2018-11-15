var db = require("./../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {
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