/**
 * @swagger
 * components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  - username
 *                  - email
 *                  - password
 *              properties:
 *                  _id:
 *                      type: string
 *                      description: unique id of user
 *                  username:
 *                      type: string
 *                      description: username of the user
 *                  email:
 *                      type: string
 *                      description: email of the user (unique)
 *                  password:
 *                      type: string
 *                      description: password of the user
 *              example:
 *                  id: 3whd9823hdwejhdieh
 *                  username: Alzheimer
 *                  email: alzheimer992@mail.ru
 *                  password: randomized_strong_password
 */


/**
 * @swagger
 * tags:
 *      name: Auth
 *      description: Authentication and Authorization
 *
 *
 * @swagger
 * /api/v1/auth/login:
 *      post:
 *          summary: logging in
 *          tags: [Auth]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          responses:
 *              200:
 *                  description: first time returns 'login' then returns accessToken, refreshToken and user email
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Token'
 *
 * /api/v1/auth/signup:
 *      post:
 *          summary: registering new user
 *          tags: [Auth]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          responses:
 *              201:
 *                  description: registering new user
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Token'
 *
 * */
