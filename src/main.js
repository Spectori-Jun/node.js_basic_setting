const express = require('express')
const index = require('./routes/index')
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use('/public', express.static('src/public'))

app.use('/', index)

app.listen(3000)
