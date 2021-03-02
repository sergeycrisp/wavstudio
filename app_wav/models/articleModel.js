const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  header: {
    type: String,
    required: [true, 'An article must have header'],
    trim: true,
    minLength: [8, 'An article header must be longer, than 8 symbols'],
    maxLength: [100, 'An article header must be shorter, than 8 symbols'],
  },
  created: {
    type: Date,
    default: Date.now,
  },
  author: {
    required: [true, 'A article must have an author'],

    type: [
      {
        type: String,
        default: 'admin',
      },
    ],
  },
  slug: String,
  text: String,
  tags: [String],
  likes: {
    type: Number,
    default: 0,
  },
  visible: Boolean,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
