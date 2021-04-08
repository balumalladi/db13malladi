const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
snakename: String,
habitat: String,
classification: String,
price: Number
})
module.exports = mongoose.model("snakes", costumeSchema)
