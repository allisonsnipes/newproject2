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
    res.render('index')
  })

  // Get all examples
  app.get('/list', function (req, res) {
    Missing.search()
      .then(function (result) {
        res.json(result)
      })
  })
  app.get('/:id', function (req, res, next) {
    Missing.find(req.params.id).then(persons => {
      if (persons) {
        res.json(persons)
      } else {
        next(new Error('Person not found'))
      }
    })
  })

  app.post('/', function (req, res, next) { // post request do some action
    if (req.body) {
    // insert into table
      Missing.create(req.body).then(persons => {
        res.json(persons[0])
      })
    } else {
      next(new Error('Input all fields'))
    }
  })

  app.delete('/:id', function (req, res) {
    Missing.delete(req.params.id).then(() => {
      res.json({
        deleted: true
      })
    })
  })
}
