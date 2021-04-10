const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'There is email?'],
  },
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
