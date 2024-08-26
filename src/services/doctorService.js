import commonApi from './commonApi';

const doctorApi = commonApi.create({
  baseURL: 'http://localhost:1202', // Doctor service
});

// CRUD Operations for Doctors
const doctorService = {
  // Get all doctors
  getAllDoctors: () => doctorApi.get('/doctors'),

  // Get doctor by ID
  getDoctorById: (id) => doctorApi.get(`/doctors/${id}`),

  // Create a new doctor
  createDoctor: (doctorData) => doctorApi.post('/doctors', doctorData),

  // Update an existing doctor
  updateDoctor: (id, doctorData) => doctorApi.put(`/doctors/${id}`, doctorData),

  // Delete a doctor
  deleteDoctor: (id) => doctorApi.delete(`/doctors/${id}`),
};

export default doctorService;