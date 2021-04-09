const mongoose = require("mongoose")
const snakeSchema = mongoose.Schema({
snakename: String,
habitat: String,
classification: String,
price: Number
})
module.exports = mongoose.model("snakes", snakeSchema)
