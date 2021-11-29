

const router = require('express-promise-router')(); 


const { mail } = require('../controllers');

router.route('/mail').post(mail.send);


module.exports = router;