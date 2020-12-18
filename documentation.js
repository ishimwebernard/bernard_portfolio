/**
 * @swagger
 * /:
 *   get:
 *     description: Welcome you to the application
 *     responses:
 *       200:
 *         description: Success
 * 
 */
 /**
 * @swagger
 * /comment:
 *   get:
 *     description: Shows you all the comment
 *     responses:
 *       200:
 *         description: Success
 * 
 */
 /**
 * @swagger
 * /post:
 *   get:
 *     description: Shows you all the posts
 *     responses:
 *       200:
 *         description: Success
 * 
 */
/**
 * @swagger
 * /post/{postid}:
 *  get:
 *   summary: get single post
 *   description: get single post
 *   parameters:
 *    - in: path
 *      name: postid
 *      schema:
 *       type: string
 *      required: true
 *      description: Check the post with get and paste its id
 *      example: 5fc7d4115ac991249c1c98a0
 *   responses:
 *    200:
 *     description: success
 */
/**
 * @swagger
 * /comment/{commentId}:
 *  get:
 *   summary: get single post
 *   description: get single Comment
 *   parameters:
 *    - in: path
 *      name: commentId
 *      schema:
 *       type: string
 *      required: true
 *      description: Check the post with get and paste its id
 *      example: 5fc7d4115ac991249c1c98a0
 *   responses:
 *    200:
 *     description: success
 */

/**
 * @swagger
 * account/login:
 *  post:
 *   summary: Login with your credentials
 *   description: Login with your credentials
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      
 */
/**
 * @swagger
 * account/:
 *  post:
 *   summary: Create an account
 *   description: Sign up with email and username
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      
 */
