const express = require('express')
const router = express.Router()
const Product = require('../models/Product');

router.get('/:category', (req,res) => {
    const {category} = req.params
    console.log("index")
    if (category === "All"){
        Product.find({})
            .then(response => {
                res.json(response);
            })
            .catch((err) => {
                console.log(err)
            })
    } else {
        Product.find({})
        .where("category").equals(category)
        .exec()
        .then(response => {
            res.json(response);
        })
        .catch((err) => {
            console.log(err)
          })
    }
})

router.get('/', (req,res) => {
    const {_id} = req.query
    console.log(_id)
    Product.find({})
        .where("_id").equals(_id)
        .exec()
        .then(response => {
            console.log(response)
            res.json(response);
        })
        .catch((err) => {
            console.log(err)
          })
})


router.post('/', (req,res) => {
    const {name, description, ingredients, price, 
        ratings, img, category} = req.body
    Product({
            name : name,
            description : description,
            ingredients : ingredients,
            price : price,
            ratings : ratings,
            img : {
                filename : img.filename,
                mimetype : img.mimetype
              },
            category : category
        })
        .save()
        .then(response => {
            console.log("added for maker")
            res.json(response);
        })
  })
  

module.exports = router
