import postRoute from './api/post';
import commentRoute from './api/comments';
import {Router} from 'express';
import authroute from '../routes/api/authroute';
import welcomeRoute from '../routes/api/welcome';

const router = Router();

router.use("/posts", postRoute);
router.use("/comments", commentRoute);
router.use("/account", authroute);
router.use("/", welcomeRoute);

module.exports = router
