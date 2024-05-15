const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    dni:{
      type: String,
      required: true
    },
    nombre:{
      type: String,
      required: true
    },
    apellido: {
      type: String,
      required: true
    }
  });

  module.exports = {customerSchema}