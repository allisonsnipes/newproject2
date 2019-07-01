// *********************************************************************************
// Example.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
const knex = require('../config/connection.js')

/**
 * Queries the Missing database
 *
 * @class Missing
 */
class Missing {
  constructor (table = 'persons') {
    this.table = table
  }

  /**
   *
   * Find all Persons in the table
   * @returns Promise
   * @memberof Missing
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
   * @memberof Missing
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
   * @memberof Missing
   */
  destroy (where) {
    return knex(this.table)
      .where(where)
      .del()
  }

  /**
   * WARNING: DELETES ALL records in the table
   *
   * @returns Promise
   * @memberof Missing
   */
  reset () {
    return knex(this.table)
      .truncate()
  }
}

// Queries the missingDB database
// class Missing {
//   constructor (table = 'persons') {
//     this.table = table
//   }

//   search () {
//     return knex.select().table(this.table)
//   }

//   // create a new data of missing person
//   create (missing) {
//     return knex('persons').insert(missing, '*')
//   }
//   // searches database by id
//   find (id) {
//     return knex('persons').where('id', id).first()
//   }

//   // deletes records by id
//   delete (id) {
//     return knex('persons').where('id', id).del()
//   }
// }

module.exports = new Missing()
