// Dependecies
const Missing = require('../models/example')
const path = require('path')
/**
 * htmlRoutes: This routes file renders views e.g. handlebars pages
 * It differs from the apiRoutes.js file in that it responds to the client/view requests with a
 * handlebars page where the apiRoutes.js responds with data onlu
 *
 */
module.exports = function (app) {
  // load index page
  // app.get('/', function (req, res) {
  //   Missing.findAll()
  //     .then(function (dbMissing) {
  //       res.render('index', {
  //         msg: 'Welcome!',
  //         examples: dbMissing
  //       })
  //     })
  // })
  // Load example page and pass in an example by id
  // app.get('/example/:id', function (req, res) {
  //   Missing.find({ id: req.params.id })
  //     .then(function (dbMissing) {
  //       res.render('example', {
  //         example: dbMissing
  //       })
  //     })
  // })

  // // Render 404 page for any unmatched routes
  // app.get('*', function (req, res) {
  //   res.render('404')
  // })

  app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/index.html'))
  })

  app.get('/list', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/list.html'))
  })

  app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/contact.html'))
  })
}

// // Get all examples
// app.get('/list', function (req, res) {
//   res.sendFile(path.join(__dirname, '/../public/list.html'))
// })

// app.get('/contact', function (req, res) {
//   res.sendFile(path.join(__dirname, '/../public/contact.html'))
// })