const genericCrud = require('./generic.controller');
const { Product } = require('../model');
const fs = require("fs")


const relations = {
    getAll:'category',
    get:'category'
}


module.exports = {
    ...genericCrud(Product,relations)
};