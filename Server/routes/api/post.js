const postsController = require('../../controllers/postsController');
const express = require('express');
const router = express.Router();

router.post("/", postsController.savePost);

module.exports = router;



