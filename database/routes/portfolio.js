// const portfolioController = require("../controllers/portfolioController");
const path = require("path");
const db = require("../models");

module.exports = function(app){
    // testing purposes
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
    app.get("/test", function(req, res) {
        res.send("Hello World");
    });

    // Show all portfolios testing purposes
    app.get("/all", function(req, res) {
            db.Portfolio.find({}, function(error, found){
            if (error) {
                console.log(error);
            }
            else {
                res.json(found);
            }
        })
    });

    app.get("/:username", function(req, res) {
        db.Portfolio.find({username : req.params.username}, function(error, found){
            if (error) {
                console.log(error);
            }
            else {
                res.json(found);
            }
        })
    });

    // Add stocks to stocks array
    app.post("/portfolio/:username/:symbol/:owned/:price", function(req, res) {
        // console.log(req);
        db.Portfolio.findOneAndUpdate(
            { username : req.params.username },
            { $push: { stocks : {
                symbol: req.params.symbol,
                sharesOwned: req.params.owned,
                purchasePrice: req.params.price
            } }},
            function (error, success) {
                console.log(error,success);
                if (error) {
                    console.log(error);
                } else {
                    console.log(success);
                    res.send(success);
                }
        });
        // res.send(req);
    });
    // Add stocks to watchlist array
    app.post("/watchlist/:username/:symbol", function(req, res) {
        // console.log(req);
        db.Portfolio.findOneAndUpdate(
            { username : req.params.username },
            { $push: { watchlist : req.params.symbol }},
            function (error, success) {
                console.log(error,success);
                if (error) {
                    console.log(error);
                } else {
                    console.log(success);
                    res.send(success);
                }
        });
        // res.send(req);
    });
}