const express = require('express')
const router = express.Router()
const Eater = require('../models/Eater');

router.put('/add', (req,res) => {
  const {userId, productId} = req.body
    Eater.findOneAndUpdate(
      {"_id": userId}, 
      {
        $push: {cart: productId}
      }, {
        new:true,
        runValidators:true
      })
      .then(response => {
          console.log("Add Cart : " + response)
          res.json(response)
      })
})

module.exports = router