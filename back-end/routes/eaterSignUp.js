const express = require('express')
const router = express.Router()
const Eater = require('../models/Eater');

router.post('/', (req,res) => {
  const {email, fname, lname, password, 
          city, state, zip, country} = req.body
    Eater({
        email,
        fname, 
        lname, 
        password, 
        city, 
        state, 
        zip, 
        country
      })
      .save()
      .then(response => {
          console.log("added for maker")
          res.json(response);
      })
})

module.exports = router