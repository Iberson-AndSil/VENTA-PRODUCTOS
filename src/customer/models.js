const mongoose = require('mongoose');
const { customerSchema } = require('./schemas');

const customerModel = mongoose.model('custumer', customerSchema);

module.exports = {customerModel };