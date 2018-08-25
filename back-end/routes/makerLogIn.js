const express = require('express')
const router = express.Router()
const Maker = require('../models/Maker');

router.get('/', (req,res) => {
  const {email, password, id} = req.query
  console.log(email)
  Maker.find({})
      .where("email").equals(email)
      .exec()
      .then(response => {
        res.json(response)
      })
})

module.exports = router