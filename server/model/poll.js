const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  slug: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  candidates: {
    type: Array,
  },
});

module.exports = mongoose.model('Poll', pollSchema);
