const express = require("express");
const bodyParser = require('body-parser');
const  app = express();
const connectoToMongo = require("./config/mongoose.js");
const commentRoute = require("./routes/CommentsRoute");

connectoToMongo();


app.use(express.json({extended: false}));
app.use(bodyParser.json());

app.use("/comment", commentRoute);

app.listen(3000, ()=>{
  console.log(`App is listening to 3000`);
});