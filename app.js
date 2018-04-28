const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>mic check 1 2 1 2</h1>')
})

app.listen(3000, () => {
  console.log('listening on port 3000!')
})