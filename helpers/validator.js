const Post = require('../controllers/postsController');
class Validator{
    static checkPostId = async(_PARAM_ID)=>{
        const allPosts = await Post.retrieveAllPosts();
        console.log(allPosts);
    }
}
module.exports = Validator;