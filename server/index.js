import app from './app'
app.listen(process.env.PORT || 3000, ()=>{
  console.log("App is listening");
});



























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











