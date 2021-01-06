// const mongoose = require(`mongoose`);
import mongoose from 'mongoose';


const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    imageId: {
        type: String,
        required: false
    }
    // imagesource:{
    //     type: String,
    //     required: true
    // }
});
module.exports = mongoose.model('Post', postSchema);