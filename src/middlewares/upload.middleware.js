// const path = require('path')
// const multer = require('multer')
// const moment = require('moment')

// const storage = multer.diskStorage({
//     destination(req,file,cb){
//          cb(null, '/')
//          console.log(1)
//     },
//     filename(req,file,cb){
//         cb(null, `${file.originalname}-${moment().format('DDMMYYYY-HHmmss_SSS')}`)
//     }
// })

// const fileFilter = (req,file,cb) =>{
//     console.log(1)
//     if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
//        cb(null,true) 
//        console.log(1)
//     } 
//     else {
//         cb(null,false)
//         console.log(1)
//     }
// }

// module.exports = multer({
//     storage, fileFilter, limits: {fileSize: 1024*1024 *5}
// })