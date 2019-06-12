// *********************************************************************************
// Example.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
const knex = require('../config/connection.js')

/**
 * Queries the missing database
 *
 * @class missing
 */
class MissingDB {
  constructor (table = 'persons') {
    this.table = table
  }

  /**
   *
   * Find all Examples in the table
   * @returns Promise
   * @memberof persons
   */
  findAll () {
    return knex.select()
      .table(this.table)
  }

  /**
 * create a new record
 *
 * @param {Object} values The values to insert in the form of {column: value}
 * @returns Promise
 * @memberof persons
 */
  create (values) {
    return knex(this.table)
      .returning('id')
      .insert(values)
  }

  /**
   * delete 1 or more records by criteria
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @returns Promise
   * @memberof persons
   */
  destroy (where) {
    return knex(this.table)
      .where(where)
      .del()
  }
}

module.exports = new MissingDB()
