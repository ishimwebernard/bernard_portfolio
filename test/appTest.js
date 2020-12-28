import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import Posts from '../models/Posts';
import Comment, { deleteOne } from '../models/Comments';
import User from '../models/user';
require('@babel/polyfill');

chai.use(chaiHttp);
chai.should();
const toPost = new Posts({
  title: "This is a test Post",
  description: "Some simple description",
  imagesource: "Some kind of link"
});
const testComment = new Comment({
  username: "MOCK USER",
  message: "I love coding for tests",
  email: "isbernard@gmail.com"
});//5fd305f24042401a6aaacb5a
const sampleUser = new User({
  name: "HHH",
  email: "wwe@tru",
  password: "fullkindapassword "
})
var _FINAL_TEST_COMMENT;

describe("Blog tests:", async () => {
  it('should Save a  Comment', (done) => {
    chai.request(app)
      .post('/comment')
      .send(testComment)
      .end(
        (err, res)=>{
          res.should.have.status(200);
       
          _FINAL_TEST_COMMENT = res.body.data;
          done();
        }
      )
    });
    it('Get all blogs ',  (done) => {
      chai.request(app)
       .get('/post')
       .end((error,response)=>{
         expect(response).to.have.status(200);
       })
      done();
   });
  it('should Save a  post', (done) => {
    const res =  chai
      .request(app)
      .post('/post')
      .send(toPost)
      res.end((err,res)=>{
        expect(res).to.have.status(200);
        console.log("From the RESPONSE section"+res);
        done();
      });
  });

  it('should Patch a  post', (done) => {
    const res = chai
      .request(app)
      .patch('/post/5fc86a59415f5a11ecc96015')
      .send(toPost)
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();
      })
  });
  it('should get One single   post', (done) => {
    chai
      .request(app)
      .get('/post/5fe8f27bd195f81f1c5b71d8')
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();

      });
   
  });

  it('Should not get Posts by using invalid or unexisting Id', (done) => {
    chai
      .request(app)
      .get('/post/FAKEID')
      .end((err,res)=>{
         expect(res.status).to.equals(404);
        done();
        
      })
  });


  
  it('Return all comments', (done) => {
    chai
      .request(app)
      .get('/comment')
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();
      })
  });
  it('Update One Comment', (done) => {
    chai
      .request(app)
      .patch('/comment/5fd305f24042401a6aaacb5a')
      .send(testComment)
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();
      })
  });
  it('Return One Comment', (done) => {
    chai
      .request(app)
      .get('/comment/5fd305f24042401a6aaacb5a')
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();
      })
  });

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

  it('Should not delete a post for a fake Id',(done)=>{
    chai.request(app)
    .delete('/post/fakeId')
    .end((err,res)=>{
      res.should.have.status(404);
      done();
    })
  })
  it('Should delete this post',(done)=>{
    chai.request(app)
    .delete(`/post/${toPost._id}`)
    .end((err,res)=>{
      res.should.have.status(404);
      done();
    })
  });
  it('Should not sign up a user with incomplete info and this should be faster',(done)=>{
    chai.request(app).post('/account/').send({niom:"Fake name", email:"isbernard",password:"123"})
    .end((error,result)=>{
      result.should.have.status(400);
      done();
    })
  })
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
  it('Delete One Comment', (done) => {
    chai
      .request(app)
      .delete(`/comment/${_FINAL_TEST_COMMENT._id}`)
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();
      })
  });
});
  

