const express = require("express");
const bodyParser = require('body-parser');
const  app = express();
const connectoToMongo = require('./config/mongo');
const routes = require('./routes/index');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const userValidator = require('./helpers/userValidator');
require("dotenv/config");
require("@babel/polyfill");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Bernard Portfolio API",
      version: '1.0.0',
    },
  },
  apis: ["documentation.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(express.json({extended: false}));
app.use(bodyParser.json());

connectoToMongo();
app.use(routes);




module.exports = app;
