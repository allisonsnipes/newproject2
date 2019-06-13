// Dependencies
const Missing = require('../models/example')

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */

module.exports = function (app) {
  // Get all examples
  app.get('/lists', function (req, res) {
    Missing.findAll()
      .then(function (result) {
        res.json(result)
      })
  })

  app.get('/', function (req, res) {
    res.render('hello')
  })
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
