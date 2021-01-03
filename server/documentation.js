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
 *       "200":
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
 * /account/login:
 *  post:
 *      summary: "Logs in the user"
 *      description: "Use your email and password"
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                "email":
 *                 type: string
 *                 required: true
 *                "password":
 *                 type: string
 *                 required: true
 *        
 *               
 *      responses:
 *       "200":
 *         description: Success  
 *            
 */




 /**
 * @swagger
 * /comment/{commentId}:
 *  patch:
 *      summary: "Updates a comment"
 *      description: "Use your email and password"
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: commentId
 *         in: path
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                "username":
 *                 type: string
 *                 required: true
 *                "message":
 *                 type: string
 *                 required: true
 *                "email":
 *                 type: string
 *                 required: true
 *        
 *               
 *      responses:
 *       "200":
 *         description: Success  
 *            
 */


  /**
 * @swagger
 * /post/{postId}:
 *  patch:
 *      summary: "Updates a post"
 *      description: "Enter a post JSON"
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: postId
 *         in: path
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                "title":
 *                 type: string
 *                 required: true
 *                "description":
 *                 type: string
 *                 required: true
 *                "imagesource":
 *                 type: string
 *                 required: true
 *        
 *               
 *      responses:
 *       "200":
 *         description: Success  
 *            
 */

  /**
 * @swagger
 * /comment/{commentId}:
 *  patch:
 *      summary: "Updates a comment"
 *      description: "Use your email and password"
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: commentId
 *         in: path
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                "username":
 *                 type: string
 *                 required: true
 *                "message":
 *                 type: string
 *                 required: true
 *                "email":
 *                 type: string
 *                 required: true
 *        
 *               
 *      responses:
 *       "200":
 *         description: Success  
 *            
 */


  /**
 * @swagger
 * /post/{postId}:
 *  delete:
 *      summary: "Updates a post"
 *      description: "Enter a post JSON"
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: postId
 *         in: path
 *     
 *        
 *               
 *      responses:
 *       "200":
 *         description: Success  
 *            
 */

   /**
 * @swagger
 * /comment/{commentId}:
 *  delete:
 *      summary: "Deletes a comment"
 *      description: "Enter a Comment JSON"
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: commentId
 *         in: path
 *     
 *        
 *               
 *      responses:
 *       "200":
 *         description: Success  
 *            
 */