const {Router} = require('express')
const router = Router()
const controller = require('../controllers/backup.controller')

router.get('/cat', controller.backupCategory)
router.get('/product', controller.backupProducts)
router.get('/comment', controller.backupComment)
router.get('/token', controller.backupToken)
router.get('/user', controller.backupUser)

module.exports = router