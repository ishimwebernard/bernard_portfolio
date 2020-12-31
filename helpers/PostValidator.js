import Posts from '../models/Posts';
class PostValidator{
  static checkIfIdExists = async(_checkId)=>{
      let retval = 'false';
      const data = await Posts.find();
      for(let sData of data){
        if(_checkId == sData._id){
          console.log("IT IS TRUE");
          retval = 'true'
        }
      }
      return retval;
      
  }

}
module.exports = PostValidator;