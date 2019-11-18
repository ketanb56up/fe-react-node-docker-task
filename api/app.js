const express = require('express'),
  app = express(),
  helmet = require('helmet'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  PORT = 5000 || process.env.PORT,
  router = express.Router({ mergeParams: true }),
  db = require('./config/db'),
  Routes = require('./routes')

app.use(helmet())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)

Routes(router)

app.listen(PORT, error => {
  if (error) {
    console.log('Server Error.....................', error)
  } else {
    console.log('Server started at port', PORT)
  }
})
