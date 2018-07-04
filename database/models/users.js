// STANDARD SEQUELIZE LIBRARY
var Sequelize = require("sequelize");
// CONNECTION TO DATABASE
var sequelize = require("../config/connection");

var Users = sequelize.define("users", {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1,25]
        }
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1,25]
        }
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1,50]
        }
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1,244]
        }    
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [8,244]
        } 
    },
    bank_name:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1,150]
        } 
    },
    account_type:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [8]
        } 
    },
    account_number:{
        type: Sequelize.INTEGER
    },
    routing_number:{
        type: Sequelize.INTEGER
    },
    user_closed:{
        type: Sequelize.STRING,
        validate: {
            len: [1,3]
        },
        defaultValue: 'no',
    },
});

Users.sync();

module.exports = Users;