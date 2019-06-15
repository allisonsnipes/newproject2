// *********************************************************************************
// SERVER.JS - THIS FILE INITIATES YOUR ENTIRE APPLICATION. IT"S YOUR APP FOUNDATION!
// *********************************************************************************

require('dotenv').config()

const express = require('express')
// const exphbs = require('express-handlebars')
// const path = require('path')
const bodyparser = require('body-parser')

// const db = require('./models/example') // eslint-disable no-unused-consts

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(bodyparser.urlencoded({
  extended: true
}))
app.use(bodyparser.json())
app.use(express.json())
app.use(express.static('public'))

<<<<<<< HEAD
// // Handlebars
=======
// Handlebars
>>>>>>> 8a7ca73b3ae3f5291b24c31d52ab184b59fbd3cc
// app.engine(
//   'handlebars',
//   exphbs({ extname: 'handlebars', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts') })
// )
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'handlebars')

// Routes
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

// Starting our Express app
// =============================================================
app.listen(PORT, function () {
  console.log(
    '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
    PORT,
    PORT)
})

module.exports = app
