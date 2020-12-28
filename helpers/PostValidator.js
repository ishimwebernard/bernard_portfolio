const Posts = require('../models/Posts');
class PostValidator{
  static checkIfIdExists = async(_checkId)=>{
      const postIds = [];
      let retval = 'false';
      await Posts.find({}, (error,result)=>{
          for(let sampleResult of result){
            postIds.push(sampleResult._id);
            if(_checkId == sampleResult._id){
                retval = 'true';
            }
          }
          
          
      })
      return retval;
  }
  
}
module.exports = PostValidator;