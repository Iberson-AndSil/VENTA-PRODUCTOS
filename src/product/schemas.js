const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    codeProduct: {
        type: String,
        required: true
      },
    precio: {
      type: Number,
      required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    stock: {
      type: Number,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = {productSchema}