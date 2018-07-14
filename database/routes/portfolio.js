// const portfolioController = require("../controllers/portfolioController");
const path = require("path");
const db = require("../models");

module.exports = function(app){
    // testing purposes 
    app.get("/", function(req, res) {
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
    app.post("portfolio/:username/:symbol/:shares/:price", function(req, res) {
        db.Portfolio.update(
            { username : req.params.username },
            { $push: { 
                stocks : {
                symbol: req.params.symbol,
                sharesOwned: req.params.shares,
                purchasePrice: req.params.price} 
            }})
    });
    // Add stocks to watchlist array

    // Register a new user portfolio

    // Delete Portfolio


    //create portfolio
    // app.post("/api/portfolio/create",portfolioController.create);
    // find portfolio by Id
    // app.get("api/portfolio/:id",portfolioController.findById);
    // UPDATE PORTFOLIO gets it by ID
    // app.put("api/portfolio/:id", portfolioController.update);
    // DELETE PORTFOLIO 
    // app.delete("api/portfolio/delete", portfolioController.remove);

    //serving up react
    // app.get("*",function(req,res){
    //     res.sendFile(path.join(__dirname, "../../client/build/index.html"))
    // });
}