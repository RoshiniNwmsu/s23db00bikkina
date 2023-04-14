const mongoose = require("mongoose")
const umbrellachema = mongoose.Schema({
umbrella_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("umbrella",
umbrellachema)