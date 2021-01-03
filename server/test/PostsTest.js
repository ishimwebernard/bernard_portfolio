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
let NEWLY_POSTED;
describe("Posts tests:", async () => {
    it('Get all Posts ',  (done) => {
      chai.request(app)
       .get('/posts')
       .end((error,response)=>{
         expect(response).to.have.status(200);
         NEWLY_POSTED = response.body.data;
         done();
       })
   });
   it("Should return a single Post", (done)=>{
    chai.request(app)
        .get(`/posts/${NEWLY_POSTED[2]._id}`)
        .end((err,res)=>{
          res.should.have.status(200);
          done();
        })
  })
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
    chai
      .request(app)
      .patch('/posts/5fc86a59415f5a11ecc96015')
      .send(toPost)
      .end((err,res)=>{
        expect(res.status).to.equals(200);
        done();
      })
  });
  it('Should not get Posts by using invalid or unexisting Id', (done) => {
    chai
      .request(app)
      .get('/posts/FAKEID')
      .end((err,res)=>{
         res.should.have.status(404)
        done();
        
      })
  });


  it('Should delete this post',(done)=>{
    chai.request(app)
    .delete(`/posts/${toPost._id}12`)
    .end((err,res)=>{
      res.should.have.status(404);
      done();
    })
  });
  it('Should delete this post',(done)=>{
    chai.request(app)
    .delete(`/posts/${NEWLY_POSTED[3]._id}`)
    .end((err,res)=>{
      res.should.have.status(200);
      done();
    })
  });
});
  

