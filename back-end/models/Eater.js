const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eaterSchema = new Schema({
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
  cart : [String],
  checkedOut : [String]
})

const Eater = mongoose.model('Eater', eaterSchema);
 
module.exports = Eater;