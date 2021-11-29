const boom = require('boom');
const { Comment } = require('../model');
const genericCrud = require('./generic.controller');

module.exports = {
    ...genericCrud(Comment)
};