exports.up = function (knex, Promise) {
  return knex.schema.createTable('persons', function (table) {
    table.increments('id')
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.integer('age').notNullable()
    table.string('gender').notNullable()
    table.string('organization').notNullable()
    table.string('country_origin').notNullable()
    table.datetime('date_missing')
    table.boolean('is_found').defaultTo(false)
    table.timestamps(false, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('persons')
}
