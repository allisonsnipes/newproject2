exports.up = function (knex, Promise) {
  return knex.schema.createTable('persons', function (table) {
    table.increments('id')
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.integer('age').notNullable()
    table.string('gender').notNullable()
    table.string('organizations').notNullable()
    table.string('country_origin').notNullable()
    table.date('date_missing')
    table.boolean('is_found').defaultTo(false)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('persons')
}
