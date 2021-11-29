const router = require('express-promise-router')(); 
const {checkJWTSign} = require('../middlewares/jwtCheck.middleware')
const upload = require('../middlewares/upload.middleware')

const { test } = require('../controllers');

router.route('/').post(test.create);

module.exports = router;