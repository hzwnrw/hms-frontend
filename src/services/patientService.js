import commonApi from './commonApi';

const patientApi = commonApi.create({
  baseURL: 'http://localhost:1205', // Patient service
});

// CRUD Operations for Patients
const patientService = {
  // Get all patients
  getAllPatients: () => patientApi.get('/patients'),

  // Get patient by ID
  getPatientById: (id) => patientApi.get(`/patients/${id}`),

  // Create a new patient
  createPatient: (patientData) => patientApi.post('/patients', patientData),

  // Update an existing patient
  updatePatient: (id, patientData) => patientApi.put(`/patients/${id}`, patientData),

  // Delete a patient
  deletePatient: (id) => patientApi.delete(`/patients/${id}`),
};

export default patientService;