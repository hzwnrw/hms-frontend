import React, { useEffect, useState } from 'react';
import appointmentService from '../services/appointmentService';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await appointmentService.getAppointments();
        setAppointments(response.data);
      } catch (error) {
        setError('Failed to fetch appointments.');
        console.error('Error fetching appointments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Appointments</h1>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              Appointment ID: {appointment.id}, Patient ID: {appointment.patientId}, Doctor ID: {appointment.doctorId}
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
};

export default Appointments;