require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const database = require('./src/database/mongoose')
const http = require('http')
const path = require('path')
const {
    routes
} = require('./src/routes')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')


// swagger
const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: 'CRM for E-shops',
            version: '1.0.0',
            description: 'CRM using express'
        },
        servers: [{
            url: 'http://localhost:57770'
        }],
    },
    apis: ["./src/documentation/*.js"]
}

const spec = swaggerJsDoc(options)


//инициализация приложения
const app = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(spec))

app.use(cors())
app.use(bodyParser.json({
    limit: '4mb',
    extended: true
}));

app.use(bodyParser.urlencoded({
    limit: '4mb',
    extended: true
}));

app.use(express.static(path.resolve(__dirname, 'static'))) // раздает статику 

// роуты
routes.forEach((item,i) => {
    console.log(`${item} ${i} route  start`)
    app.use(`/api/v1/${item}`, require(`./src/routes/${item}`)) //
});

const PORT = 57770;


http.createServer({}, app).listen(PORT); //, APP_IP

console.log(`server run host:  http://localhost:${PORT}`);








