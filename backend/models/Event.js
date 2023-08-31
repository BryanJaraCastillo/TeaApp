const EventSchema = new Schema({
    name: String,
    description: String,
    date: Date,
    attendees: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  }, {timestamps: true});
  
  module.exports = mongoose.model('Event', EventSchema);
  