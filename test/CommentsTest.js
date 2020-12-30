import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import Posts from '../models/Posts';
import Comment from '../models/Comments';
import User from '../models/user';
require('@babel/polyfill');

chai.use(chaiHttp);
chai.should();
const testComment = new Comment({
  username: "MOCK USER",
  message: "I love coding for tests",
  email: "isbernard@gmail.com"
});//5fd305f24042401a6aaacb5a  

var _FINAL_TEST_COMMENT;

describe("Comments Test", async () => {
  it('should Save a  Comment', (done) => {
    chai.request(app)
      .post('/comments')
      .send(testComment)
      .end(
        (err, res)=>{
          res.should.have.status(200);             
          _FINAL_TEST_COMMENT = res.body.data;
          done();
        }
      )
    });

  it('Return all comments', (done) => {
    chai
      .request(app)
      .get('/comments')
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();
      })
  });
  it('Update One Comment', (done) => {
    chai
      .request(app)
      .patch('/comments/5fd305f24042401a6aaacb5a')
      .send(testComment)
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();
      })
  });
  it('Return One Comment', (done) => {
    chai
      .request(app)
      .get('/comments/5fd305f24042401a6aaacb5a')
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();
      })
  });

  it('Delete One Comment', (done) => {
    chai
      .request(app)
      .delete(`/comments/${_FINAL_TEST_COMMENT._id}`)
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();
      })
  });
});
  

