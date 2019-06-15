// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
// Dependencies
const ENV = process.env.NODE_ENV || 'development'
/* eslint-disable  no-unused-vars */
const mysql = require('mysql')
/* eslint-enable  no-unused-vars */

// Creates mySQL connection using Knex.js
const Knex = require('knex')(require('../knexfile')[ENV])

function getConnection() {
  var con = mysql.createConnection({
    host: 'localhost',
    user: 'nodeUser',
    password: '',
    database: 'missingDB'
  })
  return con;
}
getConnection();

// Exports the connection for other files to use working changes
module.exports = Knex
