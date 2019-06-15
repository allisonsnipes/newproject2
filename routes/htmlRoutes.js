// Dependecies

/**
 * htmlRoutes: This routes file renders views e.g. handlebars pages
 * It differs from the apiRoutes.js file in that it responds to the client/view requests with a
 * handlebars page where the apiRoutes.js responds with data onlu
 *
 */
module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index')
  })

  // Get all examples
  app.get('/list', function (req, res) {
    res.render('list')
  })

  app.get('/contact', function (req, res) {
    res.render('contact')
  })
}
