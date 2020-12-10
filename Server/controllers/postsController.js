
const Posts = require('../models/Posts')

class Post{
     static async savePost(request, response){
        const toPost = new Posts({
            title: request.body.title,
            description: request.body.description,
            imagesource: request.body.imagesource
        });
        console.log(request);
        await toPost.save();
        response.json(toPost);  }  


        static retrieveAllPosts =  function(request, response){
            console.log(`Retrieving Comments ...`);
            Posts.find().then(data=>{
                response.json(data);
                console.log("Data Succesfully retrieved");
            }).catch(error=>{
                console.log(error);
                response.send("Something went wrong");
            })
        }
}
module.exports = Post;
