// const mongoose = require(`mongoose`);
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    }
});
module.exports = mongoose.model('userSchema', userSchema);