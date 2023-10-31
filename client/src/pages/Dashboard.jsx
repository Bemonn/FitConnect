import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from './../utils/queries';
import { DELETE_APPOINTMENT } from './../utils/mutations';

const trainerMapping = {
  1: "John Lifter",
  2: "Emily Cardio",
  3: "Amanda Strength",
  4: "Ben Physio",
};

const Dashboard = () => {
  const { data, loading, error } = useQuery(QUERY_ME);
  const [deleteAppointment] = useMutation(DELETE_APPOINTMENT);

  const handleAppointmentDeletion = (appointment) => {
    deleteAppointment({
      variables: {
        selectedDate: appointment.selectedDate,
        selectedTime: appointment.selectedTime,
      },
    })
      .then(() => {
        console.log("Appointment deleted");
        window.location.reload(); // Reload the page
      })
      .catch((error) => {
        console.error("Error deleting appointment:", error);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { firstName, appointments } = data.me;

  return (
    <div className="container mx-auto p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Welcome, {firstName}!</h1>
      <p className="text-gray-400 mb-8">This is your dashboard where you can see and manage your appointments.</p>

      <div className="overflow-x-auto">
        <h2 className="text-3xl font-bold mb-4">Your Appointments</h2>
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Time</th>
              <th className="py-2 px-4 text-left">Trainer</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-700">
            {appointments.map((appointment) => (
              <tr key={appointment._id} className="border-b border-gray-600">
                <td className="py-2 px-4 text-left">{appointment.selectedDate}</td>
                <td className="py-2 px-4 text-left">{appointment.selectedTime}</td>
                <td className="py-2 px-4 text-left">{trainerMapping[appointment.selectedTrainer]}</td>
                <td className="py-2 px-4 text-left">
                  <button
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => handleAppointmentDeletion(appointment)}
                  >
                    Cancel Appointment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;