const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: String,
  value: Number,
  
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
