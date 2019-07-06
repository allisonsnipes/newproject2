// *********************************************************************************
// SERVER.JS - THIS FILE INITIATES YOUR ENTIRE APPLICATION. IT"S YOUR APP FOUNDATION!
// *********************************************************************************

require('dotenv').config()

const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')

// const db = require('./models/example') // eslint-disable no-unused-consts

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(express.json())
app.use(express.static('public'))

// Handlebars
// app.engine(
//   'handlebars',
//   exphbs({ extname: 'handlebars', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts') })
// )
app.set('public', path.join(__dirname, 'public'))
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
