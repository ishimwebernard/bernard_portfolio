
const Comments = require('../models/Comments');

class Comment{
        static saveComment = (request, response)=>{
            const toPost = new Comments({
                username: request.body.username,
                message: request.body.message,
                email: request.body.email
            });
            toPost.save().then(()=>{
                response.json(toPost);       
            }).catch(error=>{
                response.json({
                    status: error,
                    message: "Some fields are empty"
                })
            });
        }
        static deleteThisComment = (request, response)=>{
            Comments.remove({_id: request.params.commentId}).then((data)=>{
                response.json(data);
            }).catch(error=>{
                response.json({
                    status: error,
                message: 'Something went wrong'
                })
            })
        }
        static retrieveComment = (request, response)=>{
            
            Comments.find().then(data=>{
                response.json(data);
            }).catch(error=>{
                response.json({
                    status: error,
                message: 'Something went wrong'
                
                })
            })
        }
        static updateComment = (request, response)=>{
            Comments.update({_id: request.params.commentID},
                { $set: {title: request.body.title}}
                ).then((data)=>{
                    response.json(data);
                }).catch(error=>{
                    console.log(error);
                    response.send(`Something went wrong`);
                })
        
        }



}
module.exports = Comment;