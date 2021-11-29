/**
 * @swagger
 * components:
 *      schemas:
 *          Token:
 *              type: object
 *              required:
 *                  - token
 *                  - user
 *              properties:
 *                  _id:
 *                      type: string
 *                      description: unique id of category
 *                  token:
 *                      type: string
 *                      description: access token
 *                  user:
 *                      type: string
 *                      description: owner of the token
 *              example:
 *                  id: 3whd9823hdwejhdieh
 *                  token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTRjODI4MmJkNGQ1YjEyYzg4ZDY1MWMiLCJlbWFpbCI6ImFkbWluQG1haWwucnUiLCJpYXQiOjE2MzMxOTMzMDcsImV4cCI6MTYzMzE5NjkwN30.gT4fOtQGQek188mY_hF5I5Sr5ipBifi4s8AHJeXMh2g
 *                  description: Access Token
 */