const assert = require('chai').assert;
const Comments = require('../models/Comments');
const chai = require('chai');
const expect = require('chai').expect;
const should = require('chai').should;
const server = require('../index');
const commentsController = require('../controllers/commentsController');


const testComment = {
    username: "bernard",
    message: "Ndi umunyarwanda",
    email: "rwanda@rwanda.rw",
  };
describe('MongoDB', function(){
    it('Should write Comment to the comments Db', function(){
        var sampleComment = new Comments(testComment);
        sampleComment.save().then(()=>{
            assert(!sampleComment.isNew);
        }).catch((error)=>{
            console.log('Something went wrong'+error);
        })
    });
   
 
})
