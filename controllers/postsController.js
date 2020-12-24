
const Posts = require('../models/Posts')

class Post{
     static async savePost(request, response){
        try{
            const toPost = new Posts({
                title: request.body.title,
                description: request.body.description,
                imagesource: request.body.imagesource
            });
            await toPost.save();
             return response.send({
                 status: 200,
                 message: 'Post a post',
                 data: toPost
             }); 
        }catch(error){
            return response.send(error).status(500)
        }
     }  

     
        static retrieveAllPosts =  async function(request, response){
           try{
            const data = await Posts.find();
            return response.send({
                    status: 200,
                    message: 'Get request',
                    data
                });
            
           }catch(error){
            return response.send(error).status(500);
           }
        }
        static getOne = function(request,response){
           try{
            Posts.findById(request.params.postId).then(data=>{
                return response.send({
                    status: 200,
                    message: 'GET one post',
                    data
                })
            })
           }catch(error){
            response.send(error).status(500);
           }
        }
        static deletePost = (request, response)=>{
           try{
            Posts.remove({_id: request.params.postId}).then((data)=>{
                return response.send({
                    status: 200,
                    message: 'Delete One Post',
                    data
                })
            })
           }catch(error){
            return response.send(error).status(500);
           }
        }
        static patchPost = async (request, response)=>{
            try{
                var data = await Posts.update({_id: request.params.postId},
                    { $set: {title: request.body.title}}
                    );
                return response.send({
                    status: 200,
                    message: 'PATCH post',
                    data
                })    
            }catch(error){
                return response.send(error).status(500)
            }
        }

}
module.exports = Post;
