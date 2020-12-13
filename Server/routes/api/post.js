const postsController = require('../../controllers/postsController');
const express = require('express');
const router = express.Router();

router.post("/", postsController.savePost);
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> ft-api-retrieve-singlecomment
=======
>>>>>>> ft-patch-comment
router.get("/", postsController.retrieveAllPosts);
router.get("/:postId", postsController.getOne);
router.delete("/:postId", postsController.deletePost);
router.patch("/:postId", postsController.patchPost);

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> ft-api-retrieve-singlecomment
=======
>>>>>>> ft-patch-comment
module.exports = router;



