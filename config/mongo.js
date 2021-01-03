const mongoose = require("mongoose");
require("dotenv/config");

const connectoToMongo = function(){
    
    mongoose.connect(process.env.MONGO_HASH,

        { useUnifiedTopology: true,useNewUrlParser: true }).then(()=>{
            console.log("Server Connected to DB");
        
        }).catch(error=>{
            console.log(error);
        });
}
module.exports = connectoToMongo;
