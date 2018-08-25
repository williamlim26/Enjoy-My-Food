const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  type : String,
  data : Buffer
})

const Image = mongoose.model('Image', imageSchema);
 
module.exports = Image;