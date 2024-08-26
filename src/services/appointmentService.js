import commonApi from './commonApi';

const appointmentApi = commonApi.create({
  baseURL: 'http://localhost:1201', // Appointment service
});

// CRUD Operations for Appointments
const appointmentService = {
  // Get all appointments
  getAppointments: () => appointmentApi.get('/appointments'),

  // Get appointment by ID
  getAppointmentById: (id) => appointmentApi.get(`/appointments/${id}`),

  // Create a new appointment
  createAppointment: (appointmentData) => appointmentApi.post('/appointments/createAppointment', appointmentData),

  // Update an existing appointment
  updateAppointment: (id, appointmentData) => appointmentApi.put(`/appointments/${id}`, appointmentData),

  // Delete an appointment
  deleteAppointment: (id) => appointmentApi.delete(`/appointments/${id}`),
};

export default appointmentService;