'use strict';

const mongoose = require('mongoose');

// make a blueprint for our data and the type of data for each prop.
const notes = mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
});


module.exports = mongoose.model('notes', notes);
