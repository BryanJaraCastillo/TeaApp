const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: String,
    members: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    posts: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }]
  }, {timestamps: true});
  
  module.exports = mongoose.model('Group', GroupSchema);
  