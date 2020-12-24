const express = require("express");
const bodyParser = require('body-parser');
const  app = express();
const connectoToMongo = require('./config/mongo');
const routes = require('./routes/index');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
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

app.listen(process.env.PORT || 3000, ()=>{
  console.log("App is listening");
});
module.exports = app;



























// const swaggerJsDoc = require('swagger-jsdoc');
// const swaggerUI = require('swagger-ui-express');


// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// /**
//  * @swagger
//  * /books:
//  *   get:
//  *     description: Get all books
//  *     responses:
//  *       200:
//  *         description: Success
//  * 
//  */
// app.get('/books', (req, res) => {
//   res.send([
//     {
//       id: 1,
//       title: "Harry Potter",
//     }
//   ])
// });

// /**
//  * @swagger
//  * /books:
//  *   post:
//  *     description: Get all books
//  *     parameters:
//  *      - name: title
//  *        description: title of the book
//  *        in: formData
//  *        required: true
//  *        type: string
//  *     responses:
//  *       201:
//  *         description: Created
//  */
// app.post('/books', (req, res) => {
//   res.status(201).send();
// });











