import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import User from '../models/user';
import jwt_decode from 'jwt-decode';
require('@babel/polyfill');

chai.use(chaiHttp);
chai.should();
const sampleUser = new User({
  name: "HHH",
  email: "wwe@gmail.com",
  password: "fullkindapassword "
})

describe("User Tests", async () => {


  it('Sign Up a user', (done) => {
    chai
      .request(app)
      .post('/account')
     .send(sampleUser)
      .end((err,res)=>{
        console.log('Some kinda response');
        console.log(res.body);
        expect(res.status).to.equals(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('token');
        const d = jwt_decode(res.body.token).name;
        expect(d).to.equal(sampleUser.name);
       
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
         expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('token');
        expect(res.body).to.have.property('message');
        res.body.message.should.equal('Login Succesful');
        done();
      })
  });
  it('Should noe sign in a user with incorrect password', (done)=>{
    chai.request(app).post('/account/login').send({ 
    name: "HHH",
    email: "wwe@tru",
    password: "A VERY UNTRUE PASSWORD"})
    .end((error,result)=>{
      result.should.have.status(401);
      expect(result).to.be.an('object');
      expect(result.body.message).to.equal('Invalid Credentials');
      done();
    })
  });
  it('Should not sign up a user with incomplete info and this should be faster',(done)=>{
    chai.request(app).post('/account/').send({ email:"isbernard",password:"123"})
    .end((error,result)=>{
      result.should.have.status(400);
      expect(result).to.be.an('object');
      expect(result.body.message).to.equal('Bad request');
      console.log(result.body);
      done();
    })
  });

});
  

