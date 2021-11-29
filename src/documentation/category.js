/**
 * @swagger
 * components:
 *      schemas:
 *          Category:
 *              type: object
 *              required:
 *                  - title
 *                  - description
 *              properties:
 *                  _id:
 *                      type: string
 *                      description: unique id of category
 *                  title:
 *                      type: string
 *                      description: title of the category
 *                  description:
 *                      type: string
 *                      description: description of the category
 *              example:
 *                  id: 3whd9823hdwejhdieh
 *                  title: Phones
 *                  description: All kinda Mobile phones
 */


/**
 * @swagger
 * tags:
 *      name: Categories
 *      description: cats
 *
 *
 * @swagger
 * /api/v1/categories:
 *      get:
 *          summary: all categories
 *          tags: [Categories]
 *          responses:
 *              200:
 *                  description: getting all categories
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Category'
 *
 *      post:
 *          summary: creating category
 *          tags: [Categories]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Category'
 *          responses:
 *              201:
 *                  description: creating category
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Category'
 *              500:
 *                  description: Server error
 *
 * /api/v1/categories/{id}:
 *      get:
 *          summary: get a category
 *          tags: [Categories]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                    type: string
 *                required: true
 *                description: The category id
 *          responses:
 *              200:
 *                  description: getting a category with given {id}
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Category'
 *              404:
 *                  description: Category with given id not found!
 *
 *      patch:
 *          summary: updating a category
 *          tags: [Categories]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Category'
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                    type: string
 *                required: true
 *                description: The category id
 *          responses:
 *              200:
 *                  description: updating a category with {id}
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Category'
 *              404:
 *                  description: Category with given id not found!
 *
 *      delete:
 *          summary: delete a category
 *          tags: [Categories]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                    type: string
 *                required: true
 *                description: The category id
 *          responses:
 *              200:
 *                  description: deleting a category {id}
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Category'
 *              404:
 *                  description: Category with given id not found!
 * */