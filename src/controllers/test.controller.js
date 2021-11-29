require('dotenv').config()
const jwt = require('jsonwebtoken')
const {omit} = require ('ramda')
const {Test} = require ('../model')
const fs = require('fs');

const ACCESS_TOKEN_LIFE = '60m'





module.exports = {
    async create(req, res){
            const {test, name} = req.body
    
            let base64Image = test.split(';base64,').pop();
            let path = `static/${name}.jpg`
            fs.writeFile(path, base64Image, {encoding: 'base64'}, function(err) {
                console.log('File created');
            })
    
            const dbFile = new Test({
                name,
                path
            })
    
            await dbFile.save()
    
            res.json(name)
    }
}