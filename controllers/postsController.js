import Posts from '../models/Posts';
import PostValidator from '../helpers/PostValidator';
import uploader from "../config/cloudnary";


class Post{
     static async savePost(request, response){
        try{
            const toPost = new Posts({
                title: request.body.title,
                description: request.body.description,
                imageUrl: "",
                imageId: ""
            });
                const tmp = request.files.image.tempFilePath;
                const result = await uploader.upload(tmp, (_, result) => result);
                toPost.imageUrl = result.url;
                toPost.imageId = result.public_id;
                (async()=>{
                    await toPost.save();
                })();
             return response.status(201).send({
                 message: 'Post a post',
                 data: toPost
             });
        }catch(error){
            return response.send(error).status(500)
        }
     }


        static retrieveAllPosts =  async function(request, response){
            const data = await Posts.find();
            return response.status(200).send({
                    message: 'Success',
                    data
                });
        }
        static getOne =  async function(request, response) {
            const return_Value =  await PostValidator.checkIfIdExists(request.params.postId);
                 if(return_Value == 'false'){
                     return response.status(404).send({message:"No such Post Found"});
                 }else{
                     (async()=>{
                        const data = await Posts.findById(request.params.postId);
                        return response.status(200).send({message:"Post retrieved Succesfully",data});
                     })();
                 }

                //})
            }
        static deletePost = async(request, response)=>{
            PostValidator.checkIfIdExists(request.params.postId).then(retval=>{
                if(retval == 'true'){
                  Posts.remove({_id: request.params.postId}, function(error,data){
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
                let data = await Posts.update({_id: request.params.postId},
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
