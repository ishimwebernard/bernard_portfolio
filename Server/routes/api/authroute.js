const express = require('express');
const router = express.Router();
const authorizationController = require('../../controllers/auth')

router.post("/", authorizationController.signUp);
router.post("/login", authorizationController.login);
module.exports = router;



