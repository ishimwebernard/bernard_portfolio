import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import Comment from '../models/Comments';
require('@babel/polyfill');

chai.use(chaiHttp);
chai.should();
const testComment = new Comment({
  username: "MOCK USER",
  message: "I love coding for tests",
  email: "isbernard@gmail.com"
});

let _FINAL_TEST_COMMENT;

describe("Comments Test", async () => {
  it('should Save a  Comment', (done) => {
    chai.request(app)
      .post('/comments')
      .send(testComment)
      .end(
        (err, res)=>{
          res.should.have.status(201);          
          _FINAL_TEST_COMMENT = res.body.data;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Success OK');
          expect(res.body).to.have.property('data');

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
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('data');
        expect(res).to.be.json;
        done();
      })
  });
  it('Update One Comment', (done) => {
    chai
      .request(app)
      .patch(`/comments/${_FINAL_TEST_COMMENT._id}`)
      .send(testComment)
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('data');

        done();
      })
  });
  it('Return One Comment', (done) => {
    chai
      .request(app)
      .get(`/comments/${_FINAL_TEST_COMMENT._id}`)
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('message');
        done();
      })
  });
  it('Should not return any comment', (done) => {
    chai
      .request(app)
      .get('/comments/jjjjj')
      .end((err,res)=>{
        expect(res.status).to.equals(404);
        expect(res.body).to.have.property('message');
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
  

