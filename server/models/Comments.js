// const mongoose = require(`mongoose`);

import mongoose from 'mongoose';

const commentsSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('comments', commentsSchema);