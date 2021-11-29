const {verify} = require ('jsonwebtoken')
require('dotenv').config()

const checkJWTSign = async (req,res,next) =>{

    const { headers: {authorization} } = req;
    console.log('jwt Sign')
    if (authorization){
        const token = authorization.split(' ')[1]
        verify(token, process.env.JWT_SECRET, (err) => {
            if (err) {
                res.sendStatus(403).send('not authorized')
                return next()
            }
        })
        return next()
    }

    return res.sendStatus(403)
}

module.exports = {checkJWTSign}