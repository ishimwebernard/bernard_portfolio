
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
}
module.exports = Comment;