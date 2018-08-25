const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const makerSchema = new Schema({
  email : String,
  img : {
    filename : String,
    mimetype : String
  },
  fname : String,
  lname : String,
  password : String,
  city : String,
  state : String,
  zip : String,
  country : String,
  description : String,
  products : Array
})

const Maker = mongoose.model('Maker', makerSchema);
 
module.exports = Maker;