const mongoose = require("mongoose")
const snakeSchema = mongoose.Schema({
snakename: {
    type: String,
    required: [true, "snake name is required"]
},
habitat: {
    type: String,
    required: [true, "habitat is required"]
},
classification: {
    type: String,
    maxlength: 15,
    minlength: 5
},
price: {
    type: Number,
    max: [1000, "Price should be less than 1000"],
    min: [0, "price should be morethan 0"]
},
})
module.exports = mongoose.model("snakes", snakeSchema)
