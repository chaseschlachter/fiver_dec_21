// my database model

const eventSchema = new Schema({
  event_name: String,
  venue_name: String,
  address: String,
  description: String,
  image: String,
  geometry: {
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist'
  },
  guests: [
    {
      email: String,
      attended: String // this will be the "Y" or blank
    }
  ],
  created: {
    type: Date,  // Captures both date and time
    default: Date.now
  },
  event_start: {
    type: Date,
    required: [true, 'Date & time of event start required']
    },
  event_end: {
    type: Date,
    required: [true, 'Date & time of event end required']
  },
}, opts);

