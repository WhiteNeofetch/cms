const router = require('express-promise-router')();

const { payment} = require('../controllers');


router.route('/').post(payment.createPaymentIntent);

module.exports = router;