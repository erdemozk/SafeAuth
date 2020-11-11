const mongoose = require("mongoose")

const BadToken = new mongoose.Schema({
  token: {},
})

module.exports = mongoose.model("BadToken", BadToken)
