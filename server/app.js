import express from 'express';
import bodyParser from 'body-parser';
const  app = express();
import connectoToMongo from './config/mongo';
import routes from './routes/index';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';


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
