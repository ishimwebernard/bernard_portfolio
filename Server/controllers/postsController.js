
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
                console.log("Data Succesfully retrieved");
            }).catch(error=>{
                console.log(error);
                response.send("Something went wrong");

        })};
        static getOne = function(request,response){
            Posts.findById(request.params.postId).then(data=>{
                response.json(data);
            }).catch(error=>{
                response.json({
                    status: error,
                    message: "Failed to retrieve comments"
                });
            })
        }
        static deletePost = (request, response)=>{
            Posts.remove({_id: request.params.postId}).then((data)=>{
                response.json(data);
            }).catch(error=>{
                   response.json({
                    status: error,
                    message: "Failed to delete comments"
                });
            })
        }
        static patchPost = (request, response)=>{
          Posts.update({_id: request.params.postId},
        { $set: {title: request.body.title}}
        ).then((data)=>{
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
