
const Comments = require('../models/Comments');
const CommentValidator = require('../helpers/CommentValidator');
class Comment{
        static saveComment = (request, response)=>{
            const toPost = new Comments({
                username: request.body.username,
                message: request.body.message,
                email: request.body.email
            });
            console.log(toPost);
           
            toPost.save().then(()=>{
                return response.send({
                    status: 200,
                    message: 'POST a comment',
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

        static updateComment = (request, response)=>{
          
            Comments.update({_id: request.params.commentID},
                { $set: {message: request.body.message}}
                ).then((data)=>{
                    return response.send({
                        status: 200,
                        message: 'Patch Comment',
                        data
                    })
                });
          
    }
        static getSingleComment = (request,response)=>{
          
            Comments.findById(request.params.commentId).then(data=>{
                return response.send({
                    status: 200,
                    message: 'GET single comment',
                    data
                })
            })
           
        }
}

module.exports = Comment;