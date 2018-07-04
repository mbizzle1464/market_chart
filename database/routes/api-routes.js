// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data
// to the db this are dummy routes and can be edited to match the final routes we
// will be using for the final project if we need any more database
// functionalities please let me know so I can add them or modify them
// *********************************************************************************

// Dependencies
// =============================================================

var Users = require ("../models/users.js");
var Portfolio = require ("../models/portfolio.js");
var Orders = require ("../models/orders.js");
var Watchlist = require("../models/watchlist.js");
// Routes
// =============================================================

module.exports = function(app) {


    // Get All Users
    app.get("/api/all", function(req, res){
        Users.findAll({}).then(function(results){
            res.json(results);
        })
    });

    // Get Specific User By 
    app.get("/api/user", function(req, res){
        Users.findAll({
            where: {
                username: req.params.username
            }
        }).then(function(results){
            res.json(results);
        });
    });

    // Get User Portolio
    app.get("/:user/portfolio", function(req, res){
        Portfolio.findAll({
            where: {
                user_id: req.params.user_id
            }
        }).then(function(results) {
            res.json(results);
          });
    });
    // Get All User Orders
    app.get("/api/Orders", function(req, res){
        Orders.findAll({
            where: {
                user_id: req.params.user_id
            }
        }).then(function(results) {
            res.json(results);
          });
    });
    // Get Specific Orders Based On Date
    app.get("/api/Orders/:date", function(req, res){
        Orders.findAll({
            where: {
                order_date : req.params.order_date
            }
        }).then(function(results) {
            res.json(results);
          });
    });

    // Get Specific Orders Based on Stock Name
    app.get("/api/Orders/:stock", function(req, res){
        Orders.findAll({
            where: {
                order_stock : req.params.order_stock
            }
        }).then(function(results) {
            res.json(results);
          });
    });

    // Get Specific Orders Bases on Order Type
    app.get("/api/Orders/:type", function(req, res){
        Orders.findAll({
            where: {
                order_type: req.params.order_type
            }
        }).then(function(results) {
            res.json(results);
          });
    });

    // Get User Watchlist
    app.get("/api/watchlist", function(req, res){
        Watchlist.findAll({
            where: {
                user_id: req.params.user_id
            }
        }).then(function(results) {
            res.json(results);
          });
    });

    // Add a user
    app.post("api/register", function(req, res){
        console.log("User Data:");
        console.log(req.body);
        Users.create({
            first_name: /*req.body.first_name*/"Edgar",
            last_name: /*req.body.last_name*/"Sandoval",
            username: /*req.body.username*/"ese1307",
            email: /*req.body.email*/"ese1307@gmail.com",
            password: /*req.body.password*/"testing",
            bank_name: /*req.body.bank_name*/"Chase",
            account_type: /*req.body.account_type*/"Checking",
            account_number: /*req.body.account_number */1223134,
            routing_number: /*req.body.routing_number*/10001234,
        });
    });
    // Add stock to watchlist
    app.post("api/watchlist", function(req, res){
        console.log("Watchlist Data:");
        console.log(req.body);
        Watchlist.create({
            id: req.body.id,
            user_id: req.body.user_id,
            watch_stock: req.body.watch_stock
        });
    });
    // Add stock to portfolio
    app.post("api/portfolio", function(req, res){
        console.log("User Data: ");
        console.log(req.body);
        Portfolio.create({
            portfolio_id: req.body.portfolio_id,
            user_id: req.body.user_id,
            portfolio_value: req.body.portfolio_value,
            buying_power: req.body.buying_power,
            cash_ready: req.body.cash_ready,
            owned_stock: req.body.owned_stock
        });

    });
    // Add order to Order list
    app.post("api/register", function(req, res){
        console.log("User Data: ");
        console.log(req.body);
        Orders.create({
            order_id: req.body.first_name,
            customer_id: req.body.last_name,
            portfolio_id: req.body.username,
            order_date: req.body.email,
            order_shares: req.body.password,
            order_amount: req.body.bank_name,
            stock_name: req.body.account_type,
        });
    });
    // DELETE route for deleting items from watchlist
    app.post("/api/posts/:id", function(req, res) {
        Watchlist.destroy({
            where: {
            id: req.params.id
            }
        })
    });
    // DELETE route for deleting stocks from portfolio
    app.post("/api/port/:id", function(req, res) {
        Portfolio.destroy({
            where: {
            owned_stock: req.params.owned_stock
            }
        })
    });
}