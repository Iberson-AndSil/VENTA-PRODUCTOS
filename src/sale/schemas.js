const mongoose = require('mongoose');
const saleSchema = new mongoose.Schema({
  code:{type: String, required: true},
  products:{type: String, required: true},
  buyer:{type: String,required:true},
  date:{type: Date,required:true},
  monto: {type: Number,required:true}
  });

  module.exports = {saleSchema}