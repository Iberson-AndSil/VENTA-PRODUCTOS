const mongoose = require('mongoose');
const { saleSchema } = require('./schemas');

const saleModel = mongoose.model('sale', saleSchema);

module.exports = {saleModel };