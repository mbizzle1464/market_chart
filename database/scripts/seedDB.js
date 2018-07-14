const mongoose = require("mongoose");
const db = require("../models");
// mongoose.Promise = global.Promise;

// // This file empties the Portfolios collection and inserts the portfolios below
// // mongodb://esandoval13:P@ssw0rd@ds235431.mlab.com:35431/market_chart
mongoose.connect(
  process.env.MONGODB_URI ||
  require("../../secrets.js").MONGODB_ENDPOINT
).then(()=>{

const portfolioSeed = [
  {
    username: "test",
    stocks: [
      {
        symbol: "ZNGA",
        sharesOwned: 30,
        purchasePrice: 3.40
      },
      {
        symbol: "HEAR",
        sharesOwned: 1000,
        purchasePrice: 1.79
      }
    ],
    watchlist: [
      "AAPL", "SNAP", "TTWO"
    ],
  },
  {
    username: "testone",
    stocks: [
      {
        symbol: "AAPL",
        sharesOwned: 20,
        purchasePrice: 130.40
      },
      {
        symbol: "F",
        sharesOwned: 10,
        purchasePrice: 11.04
      }
    ],
    watchlist: [
      "HEAR", "AMZN", "NFLX"
    ],
  }
];
db.Portfolio
  .remove({}) // Empties collection
  .then(() => db.Portfolio.collection.insertMany(portfolioSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
});