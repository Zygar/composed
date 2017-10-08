const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello, world!</h1> <a href="/about">About</a>')
})

app.get('/about', function (req, res) {
  res.send('<h1>About</h1> <a href="/">Back to home</a>')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
