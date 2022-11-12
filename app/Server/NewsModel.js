const mongoose = require('mongoose')
const NewsSchema = new mongoose.Schema({
    image : String,
    title : String,
    date : String,
    source : String,
    description : String,
})

mongoose.model("newsatricle",NewsSchema)
