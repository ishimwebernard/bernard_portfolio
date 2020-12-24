const postRoute = require('./api/post');
const commentRoute = require('./api/comments')
const {Router}= require("express");
const authroute = require('../routes/api/authroute');
const welcomeRoute = require('../routes/api/welcome');

const router = Router();

router.use("/post", postRoute);
router.use("/comment", commentRoute);
router.use("/account", authroute);
router.use("/", welcomeRoute);

module.exports = router
