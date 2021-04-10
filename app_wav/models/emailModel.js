const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'There is email?'],
    minLength: [4, 'A email must be longer, than 4 symbols'],
    maxLength: [100, 'A email must be shorter, than 100 symbols'],
  },
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
