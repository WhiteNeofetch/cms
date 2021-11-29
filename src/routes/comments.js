const router = require('express-promise-router')();
const {comment} = require('../controllers');
const {checkJWTSign} = require('../middlewares/jwtCheck.middleware')

router.route('/').post(checkJWTSign, comment.create);
router.route('/').get(checkJWTSign, comment.getAll);


module.exports = router;