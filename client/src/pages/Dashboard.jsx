import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from './../utils/queries';
import { DELETE_APPOINTMENT } from './../utils/mutations'

const trainerMapping = {
  1: "John Lifter",
  2: "Emily Cardio",
  3: "Amanda Strength",
  4: "Ben Physio",
};

const Dashboard = () => {
    const { data, loading, error } = useQuery(QUERY_ME);
    const [deleteAppointment] = useMutation(DELETE_APPOINTMENT);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { firstName, appointments } = data.me;

    return (
        <div>
          <h1>Welcome, {firstName}!</h1>
          <p>This is your dashboard where you can see and manage your appointments.</p>
    
          <div>
            <h2>Your Appointments</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Trainer</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{appointment.selectedDate}</td>
                    <td>{appointment.selectedTime}</td>
                    <td>{trainerMapping[appointment.selectedTrainer]}</td>
                    <td>
                    <button
                    style={{ color: 'red' }}
                    onClick={() => {
                        console.log("Appointment deleted")
                        deleteAppointment({
                        variables: { id: appointment.id },
                      });
                    }}
                  >Cancel Appointment</button>
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