// STANDARD SEQUELIZE LIBRARY
const Sequelize = require("sequelize");
// CONNECTION TO DATABASE
const sequelize = require("../config/connection");

const Watchlist = sequelize.define("watchlist", {

    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    watch_stock:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [6]
        }
    },
},
{
    timestamps: false
});

Watchlist.sync();

module.exports = Watchlist;