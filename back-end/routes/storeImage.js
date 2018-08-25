const express = require('express')
const router = express.Router()
const Image = require('../models/Image');
const upload  = require('multer')({ dest: 'tmp/uploads/' })
const fs = require('fs')

// router.post('/', (req,res) => {
 
//   const {path} = req.body

//   Image({
//         type : "png",
//         data : fs.readFileSync(path)
//       })
//       .save()
//       .then(response => {
//           console.log("added Image")
//           res.json(response);
//       })
// })
router.post('/', upload.single('productImage'), (req, res) => {
  console.log(req.file)
  console.log(req.body)
  let newPath = ""
  if (req.file === undefined){
    res.json({
      log : "success",
      filename : "fd3df84ce5208620b083e2f9bc10033e",
      mimetype : "image/png"
    })
  } else {
    let newPath = __dirname + '/../public/images/' + req.file.filename

    switch(req.file.mimetype) {
      case 'image/jpeg':
        newPath += '.jpg'
        break
      case 'image/png':
        newPath += '.png'
        break
      default:
    }

    fs.rename(req.file.path, newPath, (err) => {
      if(err) {
        console.log(err)
        //res.send('error')
        res.json({
          log : "error"
        })
      } else {
        res.json({
          log : "success",
          filename : req.file.filename,
          mimetype : req.file.mimetype
        })
        // console.log("after success," + req.file.filename)
      }
    })
  }

  // Image({
  //   type : req.file.mimetype,
  //   data : req.file.filename
  // })
  // .save()
  // .then(response => {
  //     console.log("added Image")
  //     res.json(response);
  // })
})


router.get('/', (req, res) => {

  const {id} = req.query

  Image.findById({
    _id : id
  })
  .then(response => {
    fs.writeFileSync('/Users/weinianlim/wdft_assignments/capstone_project/enjoy-my-food/front-end/public/images/logo2.png', response.data);
    console.log("stored image")
    res.json(response)
  })
})

module.exports = router