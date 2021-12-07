require('dotenv').config()
const jwt = require('jsonwebtoken')
const {omit} = require ('ramda')
const {UserClient, Token} = require ('../model')

const ACCESS_TOKEN_LIFE = '60m'

module.exports = {
    async logout({body:{refreshToken}},res){

        const foundToken = await Token.findOne({token:refreshToken})

        if (!foundToken){
            return res.status(403).send({
                message: 'Пользователь не авторизован'
            })
        }
        console.log(foundToken)
        console.log(foundToken._id)
        await Token.findByIdAndDelete(foundToken._id)

        return res.status(200).send({
            message:'Юзер успешно разлогинен'
        })
        // декодируем токен
        // вытаскиваем из токена юзер айди
        // по юзер айди находим рефреш токен
        // удаляем этот рефреш токен
    },
    async refreshToken({ body:{ refreshToken } },res){
        //проверяем есть ли токен в запросе
        if(!refreshToken){
            return res.status(403).send({
                message: 'Действие запрещено'
            })
        }
        //ищем токен в бд
        const currentToken = await Token.findOne({token:refreshToken})

        //если не находим токен то возвращаем ошибку
        if(!currentToken){
            return res.status(403).send({
                message: 'Действие запрещено'
            })
        }

        jwt.verify(refreshToken,process.env.JWT_SECRET_REFRESH,(err, UserClient)=>{
            if(err){
                return res.status(403).send({
                    message: 'Действие запрещено'
                })
            }

            const accessToken = jwt.sign({
                UserClientId: UserClient._id,
                email: UserClient.email,
            }, process.env.JWT_SECRET,{
                expiresIn: ACCESS_TOKEN_LIFE
            })
            return res.status(200).send({
                accessToken,
                refreshToken,
                email: UserClient.email
            })
        })
    },
    async login({body:{email,password}}, res) {
        try {
            const foundUserClient = await UserClient.findOne({email})
            if(!foundUserClient){
                return res.status(403).send({
                    message: 'Извините, но логин или пароль не подходят!',
                    err
                })
            }
            //мы расшифровываем из базы данных
            //сравниваем
            //TO_DO
            const isPasswordCorrect = foundUserClient.password === password
            if (!isPasswordCorrect){
                return res.status(403).send({
                    message: 'Извините, но логин или пароль не подходят!',
                    err
                })
            }
            const accessToken = jwt.sign({
                UserClientId: foundUserClient._id,
                email: foundUserClient.email,
            }, process.env.JWT_SECRET,{
                expiresIn: ACCESS_TOKEN_LIFE
            })

            const refreshToken = jwt.sign({
                UserClientId: foundUserClient._id,
                email: foundUserClient.email,
            }, process.env.JWT_SECRET_REFRESH)

            const foundToken = await Token.findOne({
                UserClient: foundUserClient._id
            })

            if(foundToken){
                await Token.findByIdAndUpdate(foundToken._id,{token:refreshToken})
                return  res.status(200).send({
                    accessToken,
                    refreshToken,
                    email: foundUserClient.email,
                })
            }

            const item = new Token({token:refreshToken, UserClient: foundUserClient._id})
            await item.save()

            return  res.status(200).send('login')
        } catch (err){
            return res.status(403).send({
                message: 'Извините, но логин или пароль не подходят!',
                err
            })
        }
    },
    async signUP({body: {email,password} }, res){
        try {
            const foundUserClient = await UserClient.findOne({email})
            if(foundUserClient){
                return res.status(403).send({
                    message: 'Данный емейл занят',
                    err
                })
            }
            const createdUserClient = await new UserClient({email, password})
            await createdUserClient.save()


            return  res.status(200).send({
                message: "Пользователь создан"
            })
            //сделать емейл об удачной регистрации
        } catch (err){
            return res.status(403).send({
                message: 'Извините, но логин или пароль не подходят!',
                err
            })
        }
    }
}