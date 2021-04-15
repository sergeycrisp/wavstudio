const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'There is email?'],
    minLength: [4, 'A email must be longer, than 4 symbols'],
    maxLength: [100, 'A email must be shorter, than 100 symbols'],
  },
  name: {
    type: String,
    required: [true, 'There is name?'],
    minLength: [1, 'A name must be longer, than 1 symbol'],
    maxLength: [100, 'A name must be shorter, than 100 symbols'],
  },
  topic: {
    type: String,
    required: [true, 'There is topic?'],
    minLength: [4, 'A topic must be longer, than 4 symbols'],
    maxLength: [100, 'A topic must be shorter, than 100 symbols'],
  },
  text: {
    type: String,
    required: [true, 'There is email?'],
    minLength: [1, 'A email must be longer, than 1 symbols'],
    maxLength: [10000, 'A text must be shorter, than 10000 symbols'],
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
