// Dependecies
var path = require("path")
/**
 * htmlRoutes: This routes file renders views e.g. handlebars pages
 * It differs from the apiRoutes.js file in that it responds to the client/view requests with a
 * handlebars page where the apiRoutes.js responds with data onlu
 *
 */
module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  })

  // Get all examples
  app.get('/list', function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/list.html"));
  })

  app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/contact.html"));
  })
}
