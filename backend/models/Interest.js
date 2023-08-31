const InterestSchema = new Schema({
    name: String
  }, {timestamps: true});
  
  module.exports = mongoose.model('Interest', InterestSchema);
  