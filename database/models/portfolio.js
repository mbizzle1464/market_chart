// STANDARD SEQUELIZE LIBRARY
const Sequelize = require("sequelize");
// CONNECTION TO DATABASE
const sequelize = require("../config/connection");

const Portfolio = sequelize.define("portfolio", {

    portfolio_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    portfolio_value: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    buying_power: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    cash_ready:{
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    owned_stock:{
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

Portfolio.sync();

module.exports = Portfolio;