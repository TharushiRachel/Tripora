const mongoose = require('mongoose')
const TourGuideSchema = new mongoose.Schema({
    fullname : String,
    username:String,
    email : String,
    phone : String,
    licenseNo : String,
    languageProficiencies: String,
    type: String,
    description: String
    
})

mongoose.model("tourguide",TourGuideSchema)