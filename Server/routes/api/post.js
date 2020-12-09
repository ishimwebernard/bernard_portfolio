const postsController = require('../../controllers/createpost');
const express = require('express');
const router = express.Router();

router.post("/", postsController.savePost);

module.exports = router;



