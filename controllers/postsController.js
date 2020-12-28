
const Posts = require('../models/Posts');
const PostValidator = require('../helpers/PostValidator');

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
        static getOne =  function(request, response) {
            PostValidator.checkIfIdExists(String(request.params.postId)).then(return_Value => {
                 if(return_Value == 'false'){
                     return response.status(404).send({message:"No such Post Found"});
                 }else{
                     (async()=>{
                        const data = await Posts.findById(request.params.postId);
                        return response.status(200).send({message:"Post retrieved Succesfully",data});
                     })();
                 }
                     
                })
            }
        static deletePost = async(request, response)=>{
            PostValidator.checkIfIdExists(String(request.params.postId)).then(retval=>{
                if(retval == 'true'){
                 Posts.findOneAndRemove({_id: request.params.postId}, function(error,data){
                        return response.status(200).send({
                            message: "Record deleted",
                            data
                        })
                });
            }else{
                return response.status(404).send({
                    message: "The post with that ID doesnt exist"
                    
                })
            }
              });
        }
        static patchPost = async (request, response)=>{
            try{
                var data = await Posts.update({_id: request.params.postId},
                    { $set: {title: request.body.title}}
                    );
                return response.status(200).send({
                    message: 'Post Updated succesfully',
                    data
                })    
            }catch(error){
                return response.status(500).send(error);
            }
        }

}
module.exports = Post;
