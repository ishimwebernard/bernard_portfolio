const postRoute = require('./api/post');
const commentRoute = require('./api/comments')
const {Router}= require("express");



const router = Router();

router.use("/post", postRoute);
router.use("/comment", commentRoute);


module.exports = router
