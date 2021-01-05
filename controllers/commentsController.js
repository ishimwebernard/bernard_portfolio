import Comments from '../models/Comments';
import CommentValidator from '../helpers/CommentValidator';
class Comment{
        static saveComment = (request, response)=>{
            const toPost = new Comments({
                username: request.body.username,
                message: request.body.message,
                email: request.body.email
            });
           
            toPost.save().then(()=>{
                return response.status(201).send({
                    message: 'Success OK',
                    data: toPost
                })  
            })
           
        }
        static deleteThisComment = (request, response)=>{
            (async()=>{
                const res = await CommentValidator.checkIfIdExists(request.params.commentId);
                if(res == 'true'){
                    Comments.remove({_id: request.params.commentId}).then((data)=>{
                        return response.status(200).send({
                            message: 'Deleted a comment succesfully',
                            data
                        })
                });
                }else{
                    return response.status(404).send({
                        message: "The ID passed does not match any comment"
                    });
                }
            })()
           ;
        }
        static retrieveComment = async(request, response)=>{
           const data = await Comments.find();
           return response.status(200).send({
               message: "Data retrieving finished succesfully",
               data
           })
        }

        static updateComment = async(request, response)=>{
            let res = await CommentValidator.checkIfIdExists(request.params.commentId);
            if(res == 'true'){
                Comments.update({_id: request.params.commentID},
                    { $set: {message: request.body.message}}
                    ).then((data)=>{
                        return response.status(200).send({
                            status: 200,
                            message: 'Patch Comment',
                            data
                        })
                    });
            }else{
                return response.status(404).send({
                    message: "Comment not found"
                })
            }
           
          
    }
        static getSingleComment = async(request,response)=>{
         let res = await CommentValidator.checkIfIdExists(request.params.commentId);
         if(res == 'true'){
            Comments.findById(request.params.commentId).then(data=>{
                return response.status(200).send({
                    status: 200,
                    message: 'Success',
                    data
                })
            })
         }else{
             return response.status(404).send({
                 message: "No such comment"
             })
         }
           
           
        }
}

module.exports = Comment;