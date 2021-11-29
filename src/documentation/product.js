/**
 * @swagger
 * components:
 *      schemas:
 *          Product:
 *              type: object
 *              required:
 *                  - title
 *                  - description
 *                  - price
 *                  - amount
 *                  - category
 *                  - imageUrl
 *              properties:
 *                  _id:
 *                      type: string
 *                      description: unique id of user
 *                  title:
 *                      type: string
 *                      description: title of the product
 *                  description:
 *                      type: string
 *                      description: description of the product
 *                  price:
 *                      type: number
 *                      description: price of the product
 *                  amount:
 *                      type: number
 *                      description: stock amount of the product
 *                  category:
 *                      type: ref
 *                      description: category of the product
 *                  imageUrl:
 *                      type: string
 *                      description: image of the product
 *              example:
 *                  id: 3whd9823hdwejhdieh
 *                  title: IPhone 13 Pro Max
 *                  description: Brand new phone! Together with the modern technologies
 *                  price: 1399
 *                  amount: 1000
 *                  category: Mobile Device
 *                  imageUrl: static/somename-19092021-012903_845.jgp
 *
 *
 * @swagger
 * tags:
 *      name: Products
 *      description: Prod
 *
 *
 *
 * @swagger
 * /api/v1/products:
 *      get:
 *          summary: all products
 *          tags: [Products]
 *          responses:
 *              200:
 *                  description: Getting all products
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 *
 *      post:
 *          summary: creates a product
 *          tags: [Products]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          responses:
 *              201:
 *                  description: Creates new product
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 *              500:
 *                  description: Server error
 *
 * /api/v1/products/{id}:
 *      get:
 *          summary: gets a certain product
 *          tags: [Products]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                    type: string
 *                required: true
 *                description: The product id
 *          responses:
 *              200:
 *                  description: Gets a certain product with given id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 *              404:
 *                  description: Product with given id not found!
 *
 *
 *      patch:
 *          summary: updates a certain product
 *          tags: [Products]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                    type: string
 *                required: true
 *                description: The product id
 *          responses:
 *              200:
 *                  description: Updates a certain product with given id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 *
 *
 *
 *      delete:
 *          summary: deletes a certain product
 *          tags: [Products]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                    type: string
 *                required: true
 *                description: The product id
 *          responses:
 *              200:
 *                  description: Deletes a certain product with given id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 *
 *
 */