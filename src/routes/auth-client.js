const router = require('express-promise-router')();
const {checkJWTSign} = require('../middlewares/jwtCheck.middleware')
const authClient = require('../controllers/auth-client.controller')


router.route('/login').post(authClient.login);
router.route('/signup').post(authClient.signUP);
router.route('/refresh').post(authClient.refreshToken);
router.route('/logout').post(checkJWTSign, authClient.logout);



module.exports = router;