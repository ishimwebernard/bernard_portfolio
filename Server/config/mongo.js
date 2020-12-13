const mongoose = require("mongoose");
require("dotenv/config");

const connectoToMongo = function(){
    
    mongoose.connect(process.env.MONGO_HASH,

        { useUnifiedTopology: true,useNewUrlParser: true }).then(()=>{
                
        }).catch(error=>{
                
        });
}
module.exports = connectoToMongo;
