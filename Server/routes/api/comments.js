const commentsController = require('../../controllers/commentsController');
const express = require('express');
const router = express.Router();

router.post("/", commentsController.saveComment);
router.delete("/:commentId", commentsController.deleteThisComment);
router.get("/", commentsController.retrieveComment);
router.patch("/:commentId", commentsController.patchComment);


module.exports = router;



