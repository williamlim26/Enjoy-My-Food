const express = require('express')
const router = express.Router()
const Maker = require('../models/Maker');

router.post('/', (req,res) => {
  const {email, fname, lname, password, 
          city, state, zip, country} = req.body
    Maker({
        email,
        fname, 
        lname, 
        password, 
        city, 
        state, 
        zip, 
        country,
        img : {
            filename : "fd3df84ce5208620b083e2f9bc10033e",
            mimetype : "image/png"
        }
      })
      .save()
      .then(response => {
          console.log("added for maker")
          res.json(response);
      })
})

module.exports = router