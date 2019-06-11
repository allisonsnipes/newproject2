// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
// Dependencies
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')
const environmentConfig = config[environment]
/* eslint-disable  no-unused-vars */
const mysql = require('mysql')
/* eslint-enable  no-unused-vars */

// Creates mySQL connection using Knex.js
const Knex = require('knex')
const connection = Knex(environmentConfig)

// Exports the connection for other files to use working changes
module.exports = connection
