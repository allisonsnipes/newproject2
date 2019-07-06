// Dependencies
const Missing = require('../models/example')
const multer = require('multer')
const path = require('path')

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */

module.exports = function (app) {
  // get all examples
  app.get('/api/examples', function (req, res) {
    Missing.findAll()
      .then(function (dbMissing) {
        res.json(dbMissing)
      })
  })

  // create a new example
  app.post('/api/examples', function (req, res) {
    Missing.create(req.body)
      .then(function (dbMissing) {
        res.json(dbMissing)
      })
  })

  // delete an example by id
  app.delete('/api/examples/:id', function (req, res) {
    Missing.destroy(req.params)
      .then(function (dbMissing) {
        res.json(dbMissing)
      })
  })

  // // initialize imgs
  // let myImage = multer({
  //   storage: storage
  // })
}
// Missing.find(req.params.id).then(persons => {
//       if (persons) {
//         res.json(persons)
//       } else {
//         next(new Error('Person not found'))
//       }

// app.post('/', function (req, res, next) { // post request do some action
//   if (req.body) {
//     // insert into table
//     Missing.create(req.body).then(persons => {
//       res.json(persons[0])
//     })
//   } else {
//     next(new Error('Input all fields'))
//   }
// })

// app.delete('/:id', function (req, res) {
//   Missing.delete(req.params.id).then(() => {
//     res.json({
//       deleted: true
//     })
//   })
// })
// app.get('/api/journalist', function (req, res) {
//   Missing.search().then(function (data) {
//     res.json(data)
//   })
// })

// // set storage
// var storage = multer.diskStorage({
//   destination: './public/imgs',
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '.' + Date.now() +
//         path.extname(file.originalname))
//   }
// })

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */

// module.exports = function (app) {
//   app.get('/list', function (req, res) {
//     Missing.searchAll().then(function (persons) {
//       res.json(persons)
//     })

//     app.post('/', myImage.single(myImage), function (req, res, next) {
//       req.body = `http://${req.get('host')}/uploads/${req.file.filename}`

//       if (req.body) {
//         // insert into table
//         Missing.create(req.body).then(persons => {
//           res.json(persons[0])
//         })
//       } else {
//         next(new Error('Input all fields'))
//       }
//     })

//     app.delete('/:id', function (req, res) {
//       Missing.delete(req.params.id).then(() => {
//         res.json({
//           deleted: true
//         })
//       })
//     })
//   })
// }