import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import User from '../models/user';
require('@babel/polyfill');

chai.use(chaiHttp);
chai.should();
const sampleUser = new User({
  name: "HHH",
  email: "wwe@tru",
  password: "fullkindapassword "
})

describe("User Tests", async () => {


  it('Sign Up a user', (done) => {
    chai
      .request(app)
      .post('/account')
     .send(sampleUser)
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();
      })
  });
  it('Sign in a user', (done) => {
    chai
      .request(app)
      .post('/account/login')
      .send({
        email : sampleUser.email,
        password: sampleUser.password
      })
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();
      })
  });
  it('Should noe sign in a user with incorrect password', (done)=>{
    chai.request(app).post('/account/login').send({ 
    name: "HHH",
    email: "wwe@tru",
    password: "A VERY UNTRUE PASSWORD"})
    .end((error,result)=>{
      result.should.have.status(500);
      done();
    })
  });
  it('Should not sign up a user with incomplete info and this should be faster',(done)=>{
    chai.request(app).post('/account/').send({niom:"Fake name", email:"isbernard",password:"123"})
    .end((error,result)=>{
      result.should.have.status(400);
      done();
    })
  });

});
  

