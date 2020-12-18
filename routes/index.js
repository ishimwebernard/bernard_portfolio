const postRoute = require('./api/post');
const commentRoute = require('./api/comments')
const {Router, request}= require("express");
const authroute = require('../routes/api/authroute');

const router = Router();

router.use("/post", postRoute);
router.use("/comment", commentRoute);
router.use("/account", authroute);


module.exports = router
