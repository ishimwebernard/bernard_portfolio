
const Comments = require('../models/Comments');

class Comment{
        static saveComment = (request, response)=>{
            const toPost = new Comments({
                username: request.body.username,
                message: request.body.message,
                email: request.body.email
            });
            console.log(toPost);
           try{
            toPost.save().then(()=>{
                return response.send({
                    status: 200,
                    message: 'POST a comment',
                    data: toPost
                })  
            })
           }catch(error){
               return response.send(error).status(500);
           }
        }
        static deleteThisComment = (request, response)=>{
           try{

            Comments.remove({_id: request.params.commentId}).then((data)=>{
                     return response.send({
                         status: 200,
                         message: 'DELETE comment',
                         data
                     })
             });
                
           }catch(error){
                return response.send(error).status(500);
           }
        }
        static retrieveComment = (request, response)=>{
            
           try{
            Comments.find().then(data=>{
                return response.send({
                    status: 200,
                    message: 'GET all Comments',
                    data
                })
            })
           }catch(error){
               return response.send(error).status(500);
           }
        }

        static updateComment = (request, response)=>{
           try{
            Comments.update({_id: request.params.commentID},
                { $set: {message: request.body.message}}
                ).then((data)=>{
                    return response.send({
                        status: 200,
                        message: 'Patch Comment',
                        data
                    })
                });
           }catch(error){
            return response.send(error).status(500);
        }}
        static getSingleComment = (request,response)=>{
           try{
            Comments.findById(request.params.commentId).then(data=>{
                return response.send({
                    status: 200,
                    message: 'GET single comment',
                    data
                })
            })
           }catch(error){
               return response.send(error).status(500);
           }
        }
}

module.exports = Comment;