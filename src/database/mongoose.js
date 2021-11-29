const mongoose = require('mongoose')

mongoose
    .connect(process.env.MONGO_TEST_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(r => console.log('Database is on'))
    .catch(e => console.log('Database connection error!'))