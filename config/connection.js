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

// create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'nodeUser',
  password: '',
  database: 'missingDB'
})

// connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('mysql connected')
})

// Exports the connection for other files to use working changes
module.exports = Knex
