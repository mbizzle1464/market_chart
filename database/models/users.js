// STANDARD SEQUELIZE LIBRARY
const Sequelize = require("sequelize");
// CONNECTION TO DATABASE
const sequelize = require("../config/connection");

const Users = sequelize.define("users", {

    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1,25]
        },
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
            isEmail: true
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
    }
},
{
    timestamps: false
});

Users.sync();

module.exports = Users;