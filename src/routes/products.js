const router = require('express-promise-router')(); 
const {checkJWTSign} = require('../middlewares/jwtCheck.middleware')


const { product } = require('../controllers');

router.route('/:id').get(product.get);
router.route('/').post(checkJWTSign,product.create);
router.route('/').get(product.getAll);
router.route('/:id').put(checkJWTSign, product.update);
router.route('/:id').delete(checkJWTSign, product.delete);


module.exports = router;