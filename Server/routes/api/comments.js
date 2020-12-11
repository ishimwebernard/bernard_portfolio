const commentsController = require('../../controllers/commentsController');
const express = require('express');
const router = express.Router();

router.post("/", commentsController.saveComment);
router.delete("/:postId", commentsController.deleteThisComment);

module.exports = router;



