const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name : String,
  description : String,
  ingredients : String,
  price : Number,
  ratings : Number,
  img : {
    filename : String,
    mimetype : String
  },
  category : String
})

const Product = mongoose.model('Product', productSchema);
 
module.exports = Product;