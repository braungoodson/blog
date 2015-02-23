'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  author: {type:Schema.ObjectId},
  dob: {type:Date,default:Date.now},
  title: String,
  body: String,
  publish: Boolean
});

module.exports = mongoose.model('Post', PostSchema);
