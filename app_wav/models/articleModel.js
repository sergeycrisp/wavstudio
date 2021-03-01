const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  header: {
    type: String,
    required: [true, 'An article must have header'],
    trim: true,
    minLength: [8, 'An article header must be longer, than 8 symbols'],
    maxLength: [100, 'An article header must be shorter, than 8 symbols'],
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
