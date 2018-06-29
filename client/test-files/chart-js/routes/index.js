var express = require("express");
var router = express.Router();
var Chart = require("chart.js");
// var myChart = new Chart(ctx, {...});

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", "<div>Express</div>");
});

module.exports = router;
