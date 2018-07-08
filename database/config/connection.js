// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
const Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
<<<<<<< HEAD
<<<<<<< HEAD
const sequelize = new Sequelize('sequelize_test', 'root', '', {
=======
const sequelize = new Sequelize('sequelize_test', 'root', 'P@ssw0rd', {
>>>>>>> 116629b938afe7ffa6e536849253726e53e22394
    
  host: 'localhost',
=======
const sequelize = new Sequelize("sequelize_test", "root", "P@ssWord", {
  host: "localhost",
>>>>>>> 4903118714f58e1155e4606b7680730c3d510fda
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
