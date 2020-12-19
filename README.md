![Bernard Logo](https://firebasestorage.googleapis.com/v0/b/portfoliocapstone-1fd25.appspot.com/o/Bernardlogo.png?alt=media&token=5a5da54f-d293-485d-bcea-b9156e3fd641)
# My personal portfolio
This is a personal brand in which people will find more information about myself

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
-Use `npm start` to start the server

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [express-jwt](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 
- [mongoose-unique-validator](https://github.com/blakehaswell/mongoose-unique-validator) - For handling unique validation errors in Mongoose. Mongoose only handles validation at the document level, so a unique index across a collection will throw an exception at the driver level. The `mongoose-unique-validator` plugin helps us by formatting the error like a normal mongoose `ValidationError`.
- [supertest] and [mocha] for testing the endpoints
- [eslint] for code readability
## Application Structure

- `index.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.

## Authentication

Requests are authenticated with a valid JWT. The class at `controllers/auth.js` has got two functions the log in and the sign up function. These functions both return an error or a success after they are called.


<br />

