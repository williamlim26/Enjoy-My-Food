const express = require('express')
const router = express.Router()
const Eater = require('../models/Eater');

router.get('/', (req,res) => {
  const {email, password} = req.query
  console.log(email)
  Eater.find({})
      .where("email").equals(email)
      .exec()
      .then(response => {
        res.json(response)
        console.log(response)
      })
})

module.exports = router