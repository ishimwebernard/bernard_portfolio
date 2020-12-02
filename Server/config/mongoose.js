const mongoose = require("mongoose");
require("dotenv/config");

const connectoToMongo = function(){
    
    mongoose.connect(process.env.MONGO_HASH,

        { useUnifiedTopology: true,useNewUrlParser: true }).then(()=>{
        
        console.log(`Succesfully connected`);
        
        }).catch(error=>{
        
        console.log(String(error.message));
        
        });
}
module.exports = connectoToMongo;
