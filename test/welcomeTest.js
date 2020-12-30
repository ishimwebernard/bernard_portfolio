import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import Posts from '../models/Posts';
import Comment from '../models/Comments';
import User from '../models/user';
require('@babel/polyfill');

chai.use(chaiHttp);
chai.should();

describe("Welcome message to the browser",()=>{
    it("Should print the Welcome message",(done)=>{
        chai.request(app).get("/").end((error, response)=>{
            response.should.have.status(200);
            done();
        })
    })

});