const mongoose = require('mongoose');
const { productSchema } = require('./schemas');

const productModel = mongoose.model('product', productSchema);

module.exports = {productModel };