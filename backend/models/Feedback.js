const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    content: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }, {timestamps: true});
  
  module.exports = mongoose.model('Feedback', FeedbackSchema);
  