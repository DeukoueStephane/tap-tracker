
console.log('Hello Server');

const express = require('express')
const body_parser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const app = express()

app.use(morgan('combined')) // to know which device is using when using the app 
app.use(body_parser.json()) //to allow the app to parse any json file correctly
app.use(cors()) // to allow any client around the world access to the server

app.get('/status', (request, response) => {
  response.send({
    message: 'Hello Server'
  })
})

app.listen(process.env.PORT || 8081)
