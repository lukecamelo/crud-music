const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

// serves static pages for performance(?)
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
// using express-ejs-layouts for.. layouts
app.use(expressLayouts)

app.use(require('./app/routes'))

app.listen(3000, () => {
  console.log('listening on port 3000!')
})