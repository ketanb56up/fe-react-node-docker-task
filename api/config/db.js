const mongoose = require("mongoose")

const mongodbUri =
  process.env.NODE_ENV === "production"
    ? "mongodb://mongo:27017/security-scan"
    : "mongodb://localhost:27017/security-scan"

const db = mongoose
  .connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connected..."))
  .catch(error => console.log("Database Error................", error))

module.exports = db
