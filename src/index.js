const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('dotenv').config();
require('./controllers/authController')(app)

app.listen(3000, () => {
    console.log('Server is running')
})