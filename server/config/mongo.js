const mongoose = require("mongoose");
require("dotenv/config");

const connectoToMongo = function(){
    
    mongoose.connect("mongodb+srv://bianca:bianca@cluster0.zgi7m.mongodb.net/sampledb?retryWrites=true&w=majority",

        { useUnifiedTopology: true,useNewUrlParser: true }).then(()=>{
            console.log("Server Connected to DB");
        
        }).catch(error=>{
            console.log(error)
        });
}
module.exports = connectoToMongo;
