const mongoose = require('mongoose')

const db = mongoose
  .connect('mongodb://localhost:27017/security-scan', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connected...'))
  .catch(error => console.log('Database Error................', error))

module.exports = db
