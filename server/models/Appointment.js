const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  appointmentDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  trainer: {
    type: Schema.Types.ObjectId,
    ref: 'Trainer',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;