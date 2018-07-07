// STANDARD SEQUELIZE LIBRARY
var Sequelize = require("sequelize");
// CONNECTION TO DATABASE
var sequelize = require("../config/connection");

var Orders = sequelize.define("orders", {
    order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    portfolio_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },  
    order_type:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [4]
        } 
    },
    order_shares:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    order_amount:{
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    stock_name:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [6]
        }
    },
},
);

Orders.sync();

module.exports = Orders;