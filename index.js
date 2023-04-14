const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars'); //handler line1

const app = express()
const port = 3000

app.engine('.handlebars', engine({ extname: '.handlebars', defaultLayout: "main"}));//handler line2
app.set('view engine', 'handlebars'); //handler line 3
app.use('/', require(path.join(__dirname,"routes/blog.js")));

app.listen(port, () => {
  console.log(`Blog app listening on port : ${port}`)
})