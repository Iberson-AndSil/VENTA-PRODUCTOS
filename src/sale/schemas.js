const mongoose = require('mongoose');
const saleSchema = new mongoose.Schema({
  code:{type: String, required: true},
  codeProduct:{type: String, required: true},
  customer:{type: Number,required:true},
  date:{type: Date,required:true},
  monto: {type: Number,required:true}
  });

  module.exports = {saleSchema}