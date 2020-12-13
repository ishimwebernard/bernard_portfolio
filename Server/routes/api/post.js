const postsController = require('../../controllers/postsController');
const express = require('express');
const router = express.Router();

router.post("/", postsController.savePost);
<<<<<<< HEAD

=======
>>>>>>> ft-api-retrieve-singlecomment
router.get("/", postsController.retrieveAllPosts);
router.get("/:postId", postsController.getOne);
router.delete("/:postId", postsController.deletePost);
router.patch("/:postId", postsController.patchPost);

<<<<<<< HEAD

=======
>>>>>>> ft-api-retrieve-singlecomment
module.exports = router;



