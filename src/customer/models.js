const mongoose = require('mongoose');
const { customerSchema } = require('./schemas');

const customerModel = mongoose.model('Custumer', customerSchema);

module.exports = {customerModel };