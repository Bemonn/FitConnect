import { useState } from "react";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import { ADD_APPOINTMENT } from "../utils/mutations"
import { useMutation } from "@apollo/client";

const trainers = [
  { id: 1, name: "John Lifter" },
  { id: 2, name: "Emily Cardio" },
  { id: 3, name: "Amanda Strength" },
  { id: 4, name: "Ben Physio" },
];

const BookingPage = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const [addAppointment] = useMutation(ADD_APPOINTMENT)

  const handleTrainerSelect = (trainerId) => {
    setSelectedTrainer(trainerId);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleConfirmBooking = () => {
    // Ensure that the user has selected a trainer, date, and time.
    console.log(
      "Booking confirmed:",
      selectedTrainer,
      selectedDate,
      selectedTime
    );
    if (selectedTrainer && selectedDate && selectedTime) {
      addAppointment({
        variables: {
          selectedTrainer: selectedTrainer.toString(),
          selectedDate: selectedDate.toISOString(), 
          selectedTime: selectedTime.toISOString(), 
        },
      })
        .then((response) => {
          console.log("Booking confirmed:", response.data.addAppointment);
        })
        .catch((error) => {
          console.error("Error confirming booking:", error);
        });
    } else {
      console.error("Please select trainer, date, and time.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Book a Personal Trainer</h1>

      <div className="flex mb-4">
        <h2 className="mr-4">Select Trainer:</h2>
        <div className="flex space-x-4">
          {trainers.map((trainer) => (
            <button
              key={trainer.id}
              className={`border px-4 py-2 rounded ${
                selectedTrainer === trainer.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => handleTrainerSelect(trainer.id)}
            >
              {trainer.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="mb-2">Select Date:</h2>
        <Calendar onChange={handleDateSelect} value={selectedDate} />
      </div>

      <div className="mb-4">
        <h2 className="mb-2">Select Time:</h2>
        <div className="relative">
          <DatePicker
            selected={selectedTime}
            onChange={(time) => handleTimeSelect(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            dateFormat="h:mm aa"
            timeCaption="Time"
            className="border border-gray-300 rounded px-4 py-2 w-64"
          />
        </div>
      </div>

      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleConfirmBooking}
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingPage;
