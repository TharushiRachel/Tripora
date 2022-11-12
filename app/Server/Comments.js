const mongoose = require('mongoose')
const CommentSchema = new mongoose.Schema({
    name : String,
    date: String,
    review: String
    
})

mongoose.model("comments",CommentSchema)