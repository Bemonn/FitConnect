const mongoose = require("mongoose");

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  appointmentDate: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  // trainer: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Trainer',
  // },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  // },
});

module.exports = appointmentSchema;
