
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
            Comments.remove({_id: request.params.postId}).then((data)=>{
                console.log(`Deleted ${data}`);
                response.json(data);
            }).catch(error=>{
                console.log(error);
                response.send(`Something went wrong`);
            })
        }
}
module.exports = Comment;