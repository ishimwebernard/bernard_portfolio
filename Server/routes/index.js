const postRoute = require('./api/post');
const {Router}= require("express");



const router = Router();

router.use("/post", postRoute);

module.exports = router
