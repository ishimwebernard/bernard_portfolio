import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import Posts from '../models/Posts';
require('@babel/polyfill');

chai.use(chaiHttp);
chai.should();
const toPost = new Posts({
  title: "This is a test Post",
  description: "Some simple description",
  imagesource: "Some kind of link"
});

var _FINAL_TEST_COMMENT;

describe("Posts tests:", async () => {
    it('Get all Posts ',  (done) => {
      chai.request(app)
       .get('/posts')
       .end((error,response)=>{
         expect(response).to.have.status(200);
         done();
       })
   });
  it('should Save a  post', (done) => {
    const res =  chai
      .request(app)
      .post('/posts')
      .send(toPost)
      res.end((err,res)=>{
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should Patch a  post', (done) => {
    const res = chai
      .request(app)
      .patch('/posts/5fc86a59415f5a11ecc96015')
      .send(toPost)
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();
      })
  });
  it('should get One single   post', (done) => {
    chai
      .request(app)
      .get('/posts/5fe8ae40a99f893788a2f5ac')
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();

      });
   
  });

  it('Should not get Posts by using invalid or unexisting Id', (done) => {
    chai
      .request(app)
      .get('/posts/FAKEID')
      .end((err,res)=>{
         expect(res.status).to.equals(404);
        done();
        
      })
  });


  it('Should not delete a post for a fake Id',(done)=>{
    chai.request(app)
    .delete('/posts/fakeId')
    .end((err,res)=>{
      res.should.have.status(404);
      done();
    })
  })
  it('Should delete this post',(done)=>{
    chai.request(app)
    .delete(`/posts/${toPost._id}`)
    .end((err,res)=>{
      res.should.have.status(404);
      done();
    })
  });
});
  

