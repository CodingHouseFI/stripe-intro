'use strict';

var mongoose = require('mongoose');

var birdSchema = new mongoose.Schema({
  variety: { type: String, required: true },
  value: { type: Number, required: true }
});

var Bird = mongoose.model('Bird', birdSchema);

module.exports = Bird;
