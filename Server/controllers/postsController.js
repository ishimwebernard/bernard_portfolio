
const Posts = require('../models/Posts')

class Post{
     static async savePost(request, response){
        const toPost = new Posts({
            title: request.body.title,
            description: request.body.description,
            imagesource: request.body.imagesource
        });
        await toPost.save();
        response.json(toPost);  }  
}
module.exports = Post;
