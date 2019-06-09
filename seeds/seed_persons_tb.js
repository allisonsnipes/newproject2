
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('persons').del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        {
          first_name: 'random2',
          last_name: 'random3',
          age: 22,
          gender: 'Female',
          organization: 'fox',
          country_origin: 'finland',
          date_missing: new Date('1 / 1/ 2001'),
          is_found: false
        },
        {
          first_name: 'bob',
          last_name: 'ddd',
          age: 27,
          gender: 'Male',
          organization: 'cnn',
          country_origin: 'usa',
          date_missing: new Date('2 / 2 / 2002'),
          is_found: false
        }
      ])
    })
}
