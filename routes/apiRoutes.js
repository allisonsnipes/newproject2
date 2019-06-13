// Dependencies
const Missing = require('../models/example')

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index', {
      title: 'Uprooted: Missing Journalist App'
    })
  })

  // Get all examples
  app.get('/list', function (req, res) {
    Missing.findAll()
      .then(function (result) {
        res.json(result)
      })
  })
  app.get('/?', function (req, res) {
    Missing.findAll()
      .then(function (result) {
        res.json(result)
      })
  })

  app.post('/', function (req, res) { // post request do some action
  //   Missing.create({
  //     first_name: req.body.first_name,
  //     last_name: req.body.last_name,
  //     age: req.body.age,
  //     date_missing: req.body.date_missing,
  //     organizations: req.body.organizations,
  //     country_origin: req.body.country_origin,
  //     is_found: req.body.is_found,
  //     gender: req.body.gender
  //   }
  //     .then(() => res.sendStatus(200))
  //   )
    console.log(req.body)
  }
  )
}

// Create a new example
//   app.post('/api/examples', function (req, res) {
//     Example.create(req.body)
//       .then(function (dbExample) {
//         res.json(dbExample)
//       })
//   })

//   // Delete an example by id
//   app.delete('/api/examples/:id', function (req, res) {
//     Example.destroy(req.params)
//       .then(function (dbExample) {
//         res.json(dbExample)
//       })
//   })
// }
