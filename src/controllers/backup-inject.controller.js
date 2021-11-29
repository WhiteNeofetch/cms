const fs = require("fs");
const csv = require("csv-parser");
const {Category, Comment, Product, User} = require("../model");
const mongoose = require("mongoose");


module.exports.injectCategory = async (req, res) => {
    try {
        fs.createReadStream('./backups/backup-category.csv')
            .pipe(csv())
            .on('data', async (row) => {
                const category = new Category({
                    _id: mongoose.Types.ObjectId(row._id),
                    title: row.title,
                    description: row.description
                })

                await category.save()

            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            });

        res.json({
            message: 'Backup was successfully injected'
        })
    } catch (e) {
        console.log(e)
    }
}


module.exports.injectComment = async (req, res) => {
    try {
        fs.createReadStream('./backups/backup-comment.csv')
            .pipe(csv())
            .on('data', async (row) => {
                const comment = new Comment({
                    _id: mongoose.Types.ObjectId(row._id),
                    title: row.title,
                    description: row.description
                })

                await comment.save()

            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            });

        res.json({
            message: 'Backup was successfully injected'
        })
    } catch (e) {
        console.log(e)
    }
}


module.exports.injectProduct = async (req, res) => {
    try {
        fs.createReadStream('./backups/backup-product.csv')
            .pipe(csv())
            .on('data', async (row) => {
                // console.log(row)
                const product = new Product({
                    _id: mongoose.Types.ObjectId(row._id),
                    title: row.title,
                    description: row.description,
                    price: row.price.length === 0 ? 0 : +row.price,
                    amount: row.amount.length === 0 ? 0 : +row.amount,
                    category: row.category ? mongoose.Types.ObjectId(row.category) : null,
                    imageUrl: row.imageUrl
                })
                //row.category.length !== 0 ?
                // console.log(product)

                await product.save()

            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            });

        res.json({
            message: 'Backup was successfully injected'
        })
    } catch (e) {
        console.log(e)
    }
}



module.exports.injectUser = async (req, res) => {
    try {
        fs.createReadStream('./backups/backup-user.csv')
            .pipe(csv())
            .on('data', async (row) => {
                const user = new User({
                    _id: mongoose.Types.ObjectId(row._id),
                    username: row.username,
                    email: row.email,
                    password: row.password
                })

                await user.save()

            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            });

        res.json({
            message: 'Backup was successfully injected'
        })
    } catch (e) {
        console.log(e)
    }
}