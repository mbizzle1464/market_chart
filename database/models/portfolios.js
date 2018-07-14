const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  username: { type: String, required: true },
  stocks: {type: Array, 'default' : []},
  watchlist: { type: Array, 'default' : []},
}, { _id: false });

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;