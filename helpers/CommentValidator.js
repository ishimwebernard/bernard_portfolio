import Comments from '../models/Comments';
class CommentValidator{
  static checkIfIdExists = async(_checkId)=>{
      let retval = 'false';
      await Comments.find({}, (error,result)=>{
          for(let sampleResult of result){
            if(_checkId == sampleResult._id){
                retval = 'true';
            }
          }
      });
      if(retval == 'false'){
        await Comments.find({}, (error,result)=>{
          for(let sampleResult of result){
            if(_checkId == sampleResult._id){
                retval = 'true';
            }
          }
      });
      }
      return retval;
  }
  
  
}
module.exports = CommentValidator;