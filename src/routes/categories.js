const router = require('express-promise-router')();
const {checkJWTSign} = require('../middlewares/jwtCheck.middleware')
const { category} = require('../controllers');


router.route('/:id').get(category.get);
router.route('/').post(category.create);
router.route('/').get(category.getAll);
router.route('/:id').put(checkJWTSign, category.update);
router.route('/:id').delete(checkJWTSign,category.delete);


module.exports = router;