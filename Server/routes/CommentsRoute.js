const express = require("express");
const router = express.Router();
const {saveComment} = require("../Controllers/comments");

router.post("/", saveComment);

module.exports = router;