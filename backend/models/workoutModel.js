const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create workout schema
const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true });

// create and export model
module.exports = mongoose.model('Workout', workoutSchema);