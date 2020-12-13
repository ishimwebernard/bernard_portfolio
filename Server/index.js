const express = require("express");
const bodyParser = require('body-parser');
const  app = express();
const connectoToMongo = require('./config/mongo');
const routes = require('./routes/index')
require("dotenv/config");

app.use(express.json({extended: false}));
app.use(bodyParser.json());

connectoToMongo();

app.use(routes);

require("dotenv/config");

app.use(express.json({extended: false}));
app.use(bodyParser.json());

connectoToMongo();

app.use(routes)

require("dotenv/config");

app.use(express.json({extended: false}));
app.use(bodyParser.json());

app.listen(3000, ()=>{
  console.log(`App is listening to 3000`);
});