import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
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