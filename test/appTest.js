import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
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

describe("Blog tests:", async () => {
  it('should Save a  Comment', (done) => {
    const res = chai
      .request(app)
      .post('/comment')
      .field('username', testComment.username)
      .field("message", testComment.message)
      .field('email', testComment.email)
      .end((err,res)=>{
        console.log(res.body);
        // expect(res.status).to.equals(200);
        res.should.have.status(200);

        done();
        
      });
    });
});

  // it('Get all blogs ',  (done) => {
  //    chai.request(app)
  //     .get('/post')
  //     .end((error,response)=>{
  //       expect(response).to.have.status(200);
  //     })
  //    done();
  // });

  // it('should Save a  post', () => {
  //   const res =  chai
  //     .request(app)
  //     .post('/post')
  //     .field('title', toPost.title)
  //     .field("imagesource", toPost.imagesource)
  //     .field('description', toPost.description);
  //     res.end((err,res)=>{
  //       expect(err).to.be.null;
  //       expect(res).to.have.status(200);
  //     });
  // });

  // it('should Patch a  post', () => {
  //   const res = chai
  //     .request(app)
  //     .patch('/post/5fc86a59415f5a11ecc96015')
  //     .field('title', toPost.title)
  //     .field('description', toPost.description)
  //     .field('imagesource', toPost.imagesource)
  //     .end((err,res)=>{
  //       expect(res.status).to.equals(200);
  //     })
  // });
  // it('should get One single   post', (done) => {
  //   const res = chai
  //     .request(app)
  //     .get('/post/5fd2fd34f5f9d1142feed30f')
  //     .end((err,res)=>{
  //       expect(res.status).to.equals(200);
  //     });
  //     done();
   
  // });
  // it('should return 404', () => {
  //   const res = chai
  //     .request(app)
  //     .get('/post/FAKEID')
  //     .end((err,res)=>{
  //       expect(res.status).to.equals(404);
  //     })
  // });


  // });
  // it('Return all comments', () => {
  //   const res = chai
  //     .request(app)
  //     .get('/comment')
  //     .end((err,res)=>{
  //       expect(res.status).to.equals(200);
  //     })
  // });
  // it('Update One Comment', () => {
  //   const res = chai
  //     .request(app)
  //     .patch('/comment/5fd305f24042401a6aaacb5a')
  //     .field('username', testComment.username)
  //     .field("message", testComment.message)
  //     .field('email', testComment.email)
  //     .end((err,res)=>{
  //       expect(res.status).to.equals(200);
  //     })
  // });
  // it('Return One Comment', () => {
  //   const res = chai
  //     .request(app)
  //     .get('/comment/5fd305f24042401a6aaacb5a')
  //     .end((err,res)=>{
  //       expect(res.status).to.equals(200);
  //     })
  // });
  // it('Delete One Comment', () => {
  //   const res = chai
  //     .request(app)
  //     .delete('/comment/5fd305f24042401a6aaacb5a')
  //     .end((err,res)=>{
  //       expect(res.status).to.equals(200);
  //     })
  // });
  // it('Sign Up a user', () => {
  //   const res = chai
  //     .request(app)
  //     .post('/account')
  //     .field('name', sampleUser.name)
  //     .field('email', sampleUser.email)
  //     .field('password', sampleUser.password)
  //     .end((err,res)=>{
  //       expect(res.status).to.equals(200);
  //     })
  // });
  // it('Sign in a user', () => {
  //   const res = chai
  //     .request(app)
  //     .post('/account/login')
  //     .field('email', sampleUser.email)
  //     .field('password', sampleUser.password)
  //     .end((err,res)=>{
  //       expect(res.status).to.equals(200);
  //     })
  // });
  // it('Return a 404 Status', () => {
  //   const res = chai
  //     .request(app)
  //     .post('/account/logkin')
  //     .field('efmail', sampleUser.email)
  //     .field('password', sampleUser.password)
  //     .end((err,res)=>{
  //       expect(res.status).to.equals(404);
  //     })
  // });





  // it("should GET all posts", async () => {
  //   const response = await chai
  //     .request(app)
  //     .post("/api/blogs/addBlog")
  //     .set("Authorization", token)
  //     .field({
  //       title: mockData.blogsData.title,
  //       author: mockData.blogsData.author,
  //       content: mockData.blogsData.content,
  //     })
  //     .attach("image", fs.readFileSync("server/tests/file/tree.png"), "tress.png");
  //   // console.log("--", mockData.blogsData.title);
  //   response.should.have.status(201);
  //   response.body.should.be.a("object");
  //   response.body.should.have.property("msg");
  //   response.body.should.have.property("data");
  // });
  // it("Should not post a blog when no token provied ", async () => {
  //   const response = await chai
  //     .request(app)
  //     .post("/api/blogs/addBlog")
  //     .set("Authorization", "")
  //     .field({
  //       title: mockData.blogsData.title,
  //       author: mockData.blogsData.author,
  //       content: mockData.blogsData.content,
  //     })
  //     .attach("image", fs.readFileSync("server/tests/file/tree.png"), "tree.png");
  //   response.should.have.status(401);
  //   response.body.should.be.a("object");
  //   response.body.should.have.property("error");
  // });

  // it("Should show a list of blogs", async () => {
  //   await chai
  //     .request(app)
  //     .post("/api/blogs/addBlog")
  //     .set("Authorization", token)
  //     .field({
  //       title: mockData.blogsData.title,
  //       author: mockData.blogsData.author,
  //       content: mockData.blogsData.content,
  //     })
  //     .attach("image", fs.readFileSync("server/tests/file/tree.png"), "tree.png");
  //   const response = await chai.request(app).get("/api/blogs");
  //   //response.body.should.have.property("message");
  //   //response.body.should.have.property("data");
  //   response.should.have.status(200);
  // });

  // it("should not update a blog post without token", async () => {
  //   const blogresponse = await chai
  //     .request(app)
  //     .post("/api/blogs/addBlog")
  //     .set("Authorization", token)
  //     .field({
  //       title: mockData.blogsData.title,
  //       author: mockData.blogsData.author,
  //       content: mockData.blogsData.content,
  //     })
  //     .attach("image", fs.readFileSync("server/tests/file/tree.png"), "tree.png");
  //   // console.log("'--'", blogresponse.body.data._id);
  //   const response = await chai
  //     .request(app)
  //     .put(`/api/blogs/updateBlog/${blogresponse.body.data._id}`)
  //     .set("Authorization", "")
  //     .send(mockData.blogsData);
  //   //response.body.should.have.property('error');
  //   response.should.have.status(401);
  // });

  // it("It should GET a blog by ID", async () => {
  //   const blogresponse = await chai
  //     .request(app)
  //     .post("/api/blogs/addBlog")
  //     .set("Authorization", token)
  //     .field({
  //       title: mockData.blogsData.title,
  //       author: mockData.blogsData.author,
  //       content: mockData.blogsData.content,
  //     })
  //     .attach("image", fs.readFileSync("server/tests/file/tree.png"), "treet.png");
  //   const response = await chai
  //     .request(app)
  //     .get(`/api/blogs/${blogresponse.body.data._id}`);

  //   response.should.have.status(200);
  //   response.body.should.be.a("object");
  //   //response.body.should.have.property('message');
  // });

  // it("It should DELETE a blog", async () => {
  //   const blogresponse = await chai
  //     .request(app)
  //     .post("/api/blogs/addBlog")
  //     .set("Authorization", token)
  //     .field({
  //       title: mockData.blogsData.title,
  //       author: mockData.blogsData.author,
  //       content: mockData.blogsData.content,
  //     })
  //     .attach("image", fs.readFileSync("server/tests/file/tree.png"), "treet.png");
  //   // console.log("##########", token);
  //   const response = await chai
  //     .request(app)

  //     .delete(`/api/blogs/delete/${blogresponse.body.data._id}`)
  //     .set("Authorization", token);
  //   // console.log("'--'", blogresponse.body.data._id);
  //   response.should.have.status(200);
  //   response.body.should.be.a("object");
  //   //response.body.should.have.property('message');
  // });

  // it("should add a comment to a blog", async () => {
  //   const blogresponse = await chai
  //     .request(app)
  //     .post("/api/blogs/addBlog")
  //     .set("Authorization", token)
  //     .field({
  //       title: mockData.blogsData.title,
  //       author: mockData.blogsData.author,
  //       content: mockData.blogsData.content,
  //     })
  //     .attach("image", fs.readFileSync("server/tests/file/tree.png"), "tress.png");
  //   // console.log("--", mockData.blogsData.title);

  //   const response = await chai
  //     .request(app)
  //     .post(`/api/blogs/comments/${blogresponse.body.data._id}`)
  //     .set("Authorization", token)
  //     .send(mockData.Comment);
  //   // console.log("--", blogresponse.body.data._id);
  //   response.should.have.status(201);
  //   response.body.should.have.property("msg");
  // });
