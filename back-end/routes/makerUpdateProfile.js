const express = require('express')
const router = express.Router()
const Maker = require('../models/Maker');

router.put('/profile', (req,res) => {
  const {_id, email, fname, lname, password, img,
          city, state, zip, country, description} = req.body
    Maker.findOneAndUpdate(
      {"_id": _id}, 
      {
        email,
        fname, 
        lname, 
        password, 
        city, 
        state, 
        zip, 
        country,
        description,
        img : {
          filename : img.filename,
          mimetype : img.mimetype
        }
      }, {
        new:true,
        runValidators:true
      })
      .then(response => {
          console.log(response)
          res.json(response)
      })
})

router.put('/product', (req,res) => {
  const {_id, imgId} = req.body
  console.log(_id)
  console.log(imgId)
  Maker.findOneAndUpdate(
    {"_id": _id}, 
    {
      $push: {products: imgId}

    }, {
      new:true,
      runValidators:true
    })
    .then(response => {
        console.log("updated product for maker")
        res.json(response);
    })
    .catch((err) => {
      console.log(err)
    })
})



module.exports = router