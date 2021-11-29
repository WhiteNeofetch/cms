const {model, Schema, Schema : {Types : {ObjectId} }} = require ('mongoose');

const schema = new Schema ({
    title:{
        type: String,
        default: ''
    },
    description:{
        type: String,
        default: ''
    },
    description2:{
        type: String,
        default: ''
    },
    price:{
        type: Number,
        default: ''
    },
    amount:{
        type: Number,
        default: ''
    },
    category:{
        type: ObjectId,
        ref: 'Category'
    },
    imageUrl:{
        type: String, 
        default: '' 
    },
    time: {
        type: String,
        default: ''
    },
    author: {
        type: String, 
        default: '' 
    }
});

module.exports = model('Product', schema);