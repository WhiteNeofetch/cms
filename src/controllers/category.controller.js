const genericCrud = require('./generic.controller');
const { Category } = require('../model');

const relations = {
    getAll:'products',
    get:'products'
}


module.exports = {
    ...genericCrud(Category,relations)
};