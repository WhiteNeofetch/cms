const Category = require('../model/Category')
const Product = require("../model/Product");
const Comment = require("../model/Comment");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const {Token, User} = require("../model");


module.exports.backupCategory = async (req, res) => {
    try {
        const cats = await Category.find({})
        
        // writing csv file
        const csvWriter = createCsvWriter({
            path: './backups/backup-category.csv',
            header: [
                {id: '_id', title: '_id'},
                {id: 'title', title: 'title'},
                {id: 'description', title: 'description'},
                {id: 'products', title: 'products'},
                // {id: '__v', title: '__v'},
            ]
        });

        csvWriter
            .writeRecords({
                message: 'Cats backup is taken'
            })
            .then(()=> console.log('The CSV file was written successfully'));

        res.json(cats)
    } catch (error) {
        console.log(error)
    }
}


module.exports.backupProducts = async (req, res) => {
    try {
        const products = await Product.find({})

        const cvsWriter = createCsvWriter({
            path: './backups/backup-product.csv',
            header: [
                {id: '_id', title: '_id'},
                {id: 'title', title: 'title'},
                {id: 'description', title: 'description'},
                {id: 'amount', title: 'amount'},
                {id: 'price', title: 'price'},
                {id: 'category', title: 'category'},
                {id: 'imageUrl', title: 'imageUrl'},
                // {id: '__v', title: '__v'}
            ]
        })

        cvsWriter
            .writeRecords(products)
            .then(()=> console.log('The CSV file was written successfully'))
            .catch(e => console.log(e))

        res.json({
            message: 'Products backup is taken'
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports.backupComment = async (req, res) => {
    try {
        const comments = await Comment.find({})

        const csvWriter = createCsvWriter({
            path: './backups/backup-comment.csv',
            header: [
                {id: '_id', title: '_id'},
                {id: 'title', title: 'title'},
                {id: 'description', title: 'description'},
                // {id: '__v', title: '__v'}
            ]
        })

        csvWriter
            .writeRecords(comments)
            .then(() => {
                res.json({
                    message: 'Comment backup is taken!'
                })
            })
            .catch(e => {
                res.json({
                    message: 'Error', e
                })
            })
    } catch (e) {
        console.log(e)
    }
}


module.exports.backupToken = async (req, res) => {
    try {
        const tokens = await Token.find({})

        res.json(tokens)
    } catch (e) {
        console.log(e)
    }
}


module.exports.backupUser = async (req, res) => {
    try {
        const users = await User.find({})

        const csvWriter = createCsvWriter({
            path: './backups/backup-user.csv',
            header: [
                {id: '_id', title: '_id'},
                {id: 'user', title: 'user'},
                {id: 'email', title: 'email'},
                {id: 'password', title: 'password'},
                // {id: '__v', title: '__v'}
            ]
        })

        csvWriter
            .writeRecords(users)
            .then(() => {
                res.json({
                    message: 'Users backup is taken'
                })
            })
            .catch(e => {
                res.json({
                    message: 'Error', e
                })
            })
    } catch (e) {
        console.log(e)
    }
}

