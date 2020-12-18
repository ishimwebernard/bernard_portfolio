const express = require('express');
const router = express.Router();

router.get("/", (request, response)=>{
    response.json({
        "message":"Welcome USE YOUR BROWSER TO NAVIGATE THROUGH MY PORTFOLIO",
        "/post":"See all posts",
        "/comment":"See all comments",
        "/account/login":"Used to log into  account",
        "account/signup":"Used to create an account"

    });
});
module.exports = router;