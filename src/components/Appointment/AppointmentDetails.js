import React, { useEffect, useState } from 'react';
import appointmentService from '../services/appointmentService';

const AppointmentDetails = ({ appointmentId }) => {
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    appointmentService.getAppointmentById(appointmentId)
      .then(response => {
        setAppointment(response.data);
      })
      .catch(error => {
        console.error('Error fetching appointment details:', error);
      });
  }, [appointmentId]);

  if (!appointment) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Appointment Details</h2>
      <p>ID: {appointment.id}</p>
      <p>Patient ID: {appointment.patientId}</p>
      <p>Doctor ID: {appointment.doctorId}</p>
      <p>Status: {appointment.status}</p>
      <p>Date: {appointment.appointmentDate}</p>
    </div>
  );
};

export default AppointmentDetails;