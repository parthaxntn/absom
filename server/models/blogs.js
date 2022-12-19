const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    },
    content:{
        type:String,
        required:true
    },
    featured_img:{
        type:String
    }
})

module.exports = mongoose.model('Blog', BlogSchema)