// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data
// to the db this are dummy routes and can be edited to match the final routes we
// will be using for the final project if we need any more database
// functionalities please let me know so I can add them or modify them
// To add these on our app add an axios.get function pointing towards the
// the route address in the function desired
// *********************************************************************************

// Dependencies
// =============================================================

var Users = require("../models/users.js");
var Portfolio = require("../models/portfolio.js");
var Orders = require("../models/orders.js");
var Watchlist = require("../models/watchlist.js");
// Routes
// =============================================================

module.exports = function(app) {
  // Get Specific User By username
  app.get("/api/:user", function(req, res) {
    Users.findAll({
      where: {
        username: req.params.username
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get User Portolio
  app.get("/api/user/portfolio", function(req, res) {
    Portfolio.findAll({
      where: {
        user_id: "1" // this needs to be req.params.user_id to handle user input
      }
    }).then(function(results) {
      res.json(results);
    });
  });
  // Get All User Orders
  app.get("/api/user/rders", function(req, res) {
    Orders.findAll({
      where: {
        user_id: req.params.user_id
      }
    }).then(function(results) {
      res.json(results);
    });
  });
  // Get Specific Orders Based On Date
  app.get("/api/orders/:date", function(req, res) {
    Orders.findAll({
      where: {
        createdAt: req.params.createdAt
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get Specific Orders Based on Stock Name
  app.get("/api/orders/:stock", function(req, res) {
    Orders.findAll({
      where: {
        order_stock: req.params.order_stock
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get Specific Orders Bases on Order Type
  app.get("/api/orders/:type", function(req, res) {
    Orders.findAll({
      where: {
        order_type: req.params.order_type
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get User Watchlist
  app.get("/api/watchlist", function(req, res) {
    Watchlist.findAll({
      where: {
        user_id: req.params.user_id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Add a user
  app.post("api/register", function(req, res) {
    console.log("User Data:");
    console.log(req.body);
    Users.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      bank_name: req.body.bank_name,
      account_type: req.body.account_type,
      account_number: req.body.account_number,
      routing_number: req.body.routing_number
    });
  });
  // Add stock to watchlist
  app.post("api/watchlist/", function(req, res) {
    console.log("Watchlist Data:");
    console.log(req.body);
    Watchlist.create({
      user_id: req.body.user_id,
      watch_stock: req.body.watch_stock
    });
  });
  // Add stock to portfolio
  app.post("api/portfolio", function(req, res) {
    console.log("User Data: ");
    console.log(req.body);
    Portfolio.create({
      user_id: req.body.user_id,
      portfolio_value: req.body.portfolio_value,
      buying_power: req.body.buying_power,
      cash_ready: req.body.cash_ready,
      owned_stock: req.body.owned_stock
    });
  });
  // Add order to Order list
  app.post("api/new/order", function(req, res) {
    console.log("User Data: ");
    console.log(req.body);
    Orders.create({
      customer_id: req.body.customer_id,
      portfolio_id: req.body.portfolio_id,
      order_type: req.body.order_type,
      order_shares: req.body.order_shares,
      order_amount: req.body.order_amount,
      stock_name: req.body.stock_name
    });
  });
  // DELETE route for deleting items from watchlist
  app.post("/api/delete", function(req, res) {
    Watchlist.destroy({
      where: {
        watch_stock: req.params.watch_stock
      }
    });
  });
  // DELETE route for deleting stocks from portfolio
  app.post("/api/sell", function(req, res) {
    Portfolio.destroy({
      where: {
        owned_stock: req.params.owned_stock
      }
    });
  });
};
