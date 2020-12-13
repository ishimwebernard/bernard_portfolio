const postsController = require('../../controllers/postsController');
const express = require('express');
const router = express.Router();

router.post("/", postsController.savePost);

router.get("/", postsController.retrieveAllPosts);
router.get("/:postId", postsController.getOne);
router.delete("/:postId", postsController.deletePost);
router.patch("/:postId", postsController.patchPost);


module.exports = router;



