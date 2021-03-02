const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  author: String,
  slug: String,
  tags: [String],
  license: {
    type: String,
    enum: ['free', 'sale', 'sale-nExc'],
    default: 'sale',
  },
  likes: {
    type: Number,
    default: 0,
  },
  visible: Boolean,
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;
