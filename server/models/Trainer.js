const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const appointmentSchema = require("./Appointment");

const trainerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  role: {
    type: String,
    enum: ["trainer"],
    required: true,
  },
  availability: [
    {
      date: Date,
      startTime: Date,
      endTime: Date,
    },
  ],
  appointments: [appointmentSchema],
});

// set up pre-save middleware to create password
trainerSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
trainerSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;