const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require('body-parser');
const  app = express();
const postsRoute = require('./routes/posts.js');
const commentsRoute = require('./routes/comments.js');

require("dotenv/config");


app.use(express.json({extended: false}));
app.use(bodyParser.json());

app.use("/posts", postsRoute);
app.use("/comments", commentsRoute);


mongoose.connect('mongodb+srv://bianca:bianca@cluster0.zgi7m.mongodb.net/sampledb?retryWrites=true&w=majority',
{ useUnifiedTopology: true,useNewUrlParser: true }).then(()=>{
  console.log(`Succesfully connected`);
}).catch(error=>{
  console.log(String(error.message));
})

app.get("/", (request,response)=>{
    response.send(`We are on Home~~`);
});
app.listen(process.env.PORT || 3000, ()=>{
  console.log(`App is listening to A PORT`);
});