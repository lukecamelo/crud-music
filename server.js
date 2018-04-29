require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// serves static pages for performance(?)

app.use(express.static(__dirname + '/public'))

// using express-ejs-layouts for.. layouts
app.set('view engine', 'ejs')
app.use(expressLayouts)

// connect to db
mongoose.connect(process.env.DB_URI)

app.use(bodyParser.urlencoded({ extended: true }))

app.use(require('./app/routes'))

app.listen(3000, () => {
  console.log('listening on port 3000!')
})