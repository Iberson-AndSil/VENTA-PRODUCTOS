const mongoose = require('mongoose');
const { customerSchema } = require('./schemas');

const customerModel = mongoose.model('customer', customerSchema);

module.exports = {customerModel};