const mongoose = require("mongoose")
const umbrellachema = mongoose.Schema({

umbrella_type: {type:String, minlength:2,maxlength:20},
size: {type:String, minlength:5,maxlength:1000},
cost: {type:Number, min:10,max:2000}
})
module.exports = mongoose.model("umbrella",
umbrellachema)