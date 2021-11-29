/**
 * @swagger
 * components:
 *      schemas:
 *          Comment:
 *              type: object
 *              required:
 *                  - title
 *                  - description
 *              properties:
 *                  _id:
 *                      type: string
 *                      description: unique id of comment
 *                  title:
 *                      type: string
 *                      description: title of the comment
 *                  description:
 *                      type: string
 *                      description: description of the comment
 *              example:
 *                  id: 3whd9823hdwejhdieh
 *                  title: Well done!
 *                  description: I'm happy to be a user of this marketplace
 *
 *
 * @swagger
 *  tags:
 *      name: Comments
 *      description: The comments
 *
 *
 * @swagger
 * /api/v1/comments:
 *      get:
 *          summary: get all comments
 *          tags: [Comments]
 *          responses:
 *              200:
 *                  description: getting all comments
 *                  content:
 *                      application/json:
 *                        schema:
 *                            type: array
 *                            items:
 *                                $ref: '#/components/schemas/Comment'
 *
 *      post:
 *          summary: create comment
 *          tags: [Comments]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Comment'
 *          responses:
 *              201:
 *                  description: creating new comment
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Comment'
 */