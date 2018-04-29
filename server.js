const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>mic check retard</h1>')
})

app.get('*', (req, res) => {
  res.send('<h1>Page not found.</h1>')
})

app.listen(3000, () => {
  console.log('listening on port 3000!')
})