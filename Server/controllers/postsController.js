
const Posts = require('../models/Posts')

class Post{
     static async savePost(request, response){
        const toPost = new Posts({
            title: request.body.title,
            description: request.body.description,
            imagesource: request.body.imagesource
        });
        await toPost.save();
        response.json(toPost);  }  


        static retrieveAllPosts =  function(request, response){
            Posts.find().then(data=>{
                response.json(data);
            }).catch(error=>{
                response.json({
                    status: error,
                    message: "Something went wrong"
                })
            })
        }
        static getOne = function(request,response){
            Posts.findById(request.params.postId).then(data=>{
                response.json(data);
            }).catch(error=>{
                response.json({
                    status: error,
                    message: "Something went wrong"
                })
            })
        }
}
module.exports = Post;