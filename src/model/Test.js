const {model, Schema, Schema: {Types: {ObjectId}}} = require('mongoose');

const schema = new Schema({
    name: {
        type: String
    },
    path: {
        type: String
    }
});

module.exports = model('Test', schema);