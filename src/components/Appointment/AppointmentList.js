import React, { useEffect, useState } from 'react';
import appointmentApi from '../services/appointmentService';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    appointmentApi.get('/appointments')
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>{appointment.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;