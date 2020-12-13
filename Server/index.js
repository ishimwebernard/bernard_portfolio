const express = require("express");
const bodyParser = require('body-parser');
const  app = express();
const connectoToMongo = require('./config/mongo');
const routes = require('./routes/index')
require("dotenv/config");

app.use(express.json({extended: false}));
app.use(bodyParser.json());

connectoToMongo();

app.use(routes)

app.listen(process.env.PORT || 3000, ()=>{
  console.log("App is listening");
});