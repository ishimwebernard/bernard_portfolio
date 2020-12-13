const mongoose = require("mongoose");
require("dotenv/config");

const connectoToMongo = function(){
    
    mongoose.connect(process.env.MONGO_HASH,

        { useUnifiedTopology: true,useNewUrlParser: true }).then(()=>{
        
        }).catch(error=>{

        }).catch(error=>{
              
        }).catch(error=>{
  
        }).catch(error=>{

        console.log(`Succesfully connected`);
        
        }).catch(error=>{
        
        console.log(String(error.message));
        
        });
}
module.exports = connectoToMongo;
