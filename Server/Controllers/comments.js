const Comments = require("../models/Comments.js");

exports.saveComment =  async(request, response)=>{
    const toPost = new Comments({
        username: request.body.username,
        message: request.body.message,
        email: request.body.email
    });
    console.log(request);
    await toPost.save();
    response.json(toPost);       
}