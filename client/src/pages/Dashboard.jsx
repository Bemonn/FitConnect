import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from './../utils/queries';

const Dashboard = () => {
    const { data, loading, error } = useQuery(QUERY_ME);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { firstName, appointments } = data.me;

    return (
        <div>
            <h1>Welcome, {firstName}!</h1>
            <p>This is your dashboard where you can see and manage your appointments.</p>

            <div>
                <h2>Your Appointments</h2>
                <ul>
                    {appointments.map(appointment => (
                        <li key={appointment._id}>
                            <span>{appointment.selectedDate} at {appointment.selectedTime} with {appointment.trainer}</span>
                            <button style={{color: 'red'}}>Cancel Appointment</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;