const {Router} = require('express')
const router = Router()
const controller = require('../controllers/backup-inject.controller')

router.post('/category', controller.injectCategory)
router.post('/comment', controller.injectComment)
router.post('/product', controller.injectProduct)
router.post('/user', controller.injectUser)


module.exports = router