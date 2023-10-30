const mongoose = require("mongoose");

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  selectedDate: {
    type: String,
    required: true,
  },
  selectedTime: {
    type: String,
    required: true,
  },
  selectedTrainer: {
    type: String,
    enum: ["1", "2", "3", "4" ],
    required: true,
  },
});

module.exports = appointmentSchema;
