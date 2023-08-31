const PostSchema = new Schema({
    content: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: 'Group'
    }
  }, {timestamps: true});
  
  module.exports = mongoose.model('Post', PostSchema);
  