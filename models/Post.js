const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    producto:String,
    precio:Number 
})

module.exports = mongoose.model('Post', postSchema);