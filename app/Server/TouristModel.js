const mongoose = require('mongoose')
const TouristSchema = new mongoose.Schema({
    country : String,
    language:String,
    preferedType : String,
    
    
})

mongoose.model("tourist",TouristSchema)