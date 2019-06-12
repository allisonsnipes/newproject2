
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('persons').del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        {
          first_name: 'Acquitte',
          last_name: 'Kisembo',
          age: 28,
          date_missing: new Date('6 / 26 / 2003'),
          organization: 'Agence France-Presse',
          country_origin: 'Congo',
          is_found: false,
          gender: 'Male'
        },
        {
          first_name: 'Yelena',
          last_name: 'Petrova',
          age: ' ',
          date_missing: new Date('8 / 11 / 1996'),
          organization: 'Lita-M',
          country_origin: 'Russia',
          is_found: false,
          gender: 'Female'
        },
        {
          first_name: 'Alfredo',
          last_name: 'Mota',
          age: '25',
          date_missing: new Date('4 / 02 / 2005'),
          organization: 'Hermosillo Daily',
          country_origin: 'Mexico',
          is_found: false,
          gender: 'Male'
        },
        {
          first_name: 'Jin Woo',
          last_name: 'Ham',
          age: ' ',
          date_missing: new Date('5 / 29 / 2017'),
          organization: 'Daily NK',
          country_origin: 'chINA',
          is_found: false,
          gender: 'Male'
        }
      ])
    })
}
