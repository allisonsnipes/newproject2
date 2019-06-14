// *********************************************************************************
// Example.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
const knex = require('../config/connection.js')

// Queries the missingDB database
class Missing {
  constructor (table = 'persons') {
    this.table = table
  }

  search () {
    return knex.select().table(this.table)
  }

  // create a new data of missing person
  create (missing) {
    return knex('persons').insert(missing, '*')
  }
  // searches database by id
  find (id) {
    return knex('persons').where('id', id).first()
  }

  // deletes records by id
  delete (id) {
    return knex('persons').where('id', id).del()
  }
}

module.exports = new Missing()
