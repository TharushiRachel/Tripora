const mongoose = require('mongoose')
const NewTourGuideSchema = new mongoose.Schema({
    name : String,
    alias:String,
    email : String,
    phone : String,
    licenseNo : String,
    language: String,
    type: String,
    description: String
    
})

mongoose.model("newtourguide",NewTourGuideSchema)