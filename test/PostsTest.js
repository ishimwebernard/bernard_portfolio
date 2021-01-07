import chai, { expect } from 'chai';
import path from 'path';
import chaiHttp from 'chai-http';
import app from '../app';
import Posts from '../models/Posts';
require('@babel/polyfill');
chai.use(chaiHttp);
chai.should();
const toPost = new Posts({
  title: 'This is a test Post',
  description: 'Some simple description',
});
let NEWLY_POSTED;
describe('Posts tests:', async () => {
  it('Get all Posts ', (done) => {
    chai
      .request(app)
      .get('/posts')
      .end((error, response) => {
        expect(response).to.have.status(200);
        NEWLY_POSTED = response.body.data;
        expect(response).to.be.json;
        expect(response.body).to.have.property('message');
        expect(response.body).to.have.property('data');
        done();
      });
  });
  it('Should return a single Post', (done) => {
    chai
      .request(app)
      .get(`/posts/${NEWLY_POSTED[2]._id}`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('data');
        done();
      });
  });
  it('should create post',  (done) => {
      chai
      .request(app)
      .post('/posts')
      .field('title', toPost.title)
      .field('description', toPost.description)
      .attach('image', path.resolve(__dirname, './uploads/HelpRender.png'))
      .end((err,res)=>{
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('data');
        res.body.data.should.have.property('imageUrl');
        done();

      })
  });
  it('should Patch a  post', (done) => {
    chai
      .request(app)
      .patch('/posts/5fc86a59415f5a11ecc96015')
      .send(toPost)
      .end((err, res) => {
        expect(res.status).to.equals(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('Post Updated succesfully');
        done();
      });
  });
  it('Should not get Posts by using invalid or unexisting Id', (done) => {
    chai
      .request(app)
      .get('/posts/FAKEID')
      .end((err, res) => {
        res.should.have.status(404);
        expect(res).to.be.json;
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('No such Post Found');
        done();
      });
  });
  it('Should delete this post', (done) => {
    chai
      .request(app)
      .delete(`/posts/${toPost._id}12`)
      .end((err, res) => {
        res.should.have.status(404);
        expect(res).to.be.json;
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('The post with that ID doesnt exist');
        done();
      });
  });
  it('Should delete this post', (done) => {
    chai
      .request(app)
      .delete(`/posts/${NEWLY_POSTED[3]._id}`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('message');
        expect(res.body).to.have.property('data');
        expect(res.body.message).to.equal('Record deleted');
        done();
      });
  });
  it('Should not delete a post with invalid Id', (done) => {
    chai
      .request(app)
      .delete(`/posts/koooooo`)
      .end((error, response) => {
        response.should.have.status(404);
        expect(response).to.be.json;
        expect(response.body).to.have.property('message');
        done();
      });
  });
});