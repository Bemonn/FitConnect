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
});

module.exports = appointmentSchema;
