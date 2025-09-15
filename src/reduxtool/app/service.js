import axiosInstance, { isAxiosError } from "../../services/api";

export const getAllUserAsync = async () => {
  try {
    const response = await axiosInstance.get(`/allusers`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const registerDoctorAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/registerdoctor`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const userDetailsAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/userdetails`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const registerClinicAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/registerclinic`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const registerStaffAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/registerstaff`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const registerPatientAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/registerpatient`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const allClinicsUsersAsync = async () => {
  try {
    const response = await axiosInstance.get(`/allclinicsusers`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const allDoctorsUsersAsync = async () => {
  try {
    const response = await axiosInstance.get(`/alldoctorsusers`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const allDoctorsUsersWhenSignupAsync = async () => {
  try {
    const response = await axiosInstance.get(`/allusers`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const getdepartmentlistAsync = async () => {
  try {
    const response = await axiosInstance.post(`/getdepartmentlist`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const getschedulelistAsync = async () => {
  try {
    const response = await axiosInstance.post(`/getscheduleslist`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const getbloglistlistAsync = async () => {
  try {
    const response = await axiosInstance.post(`/getbloglist`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};


export const getMedicallistlistAsync = async () => {
  try {
    const response = await axiosInstance.post(`/getmedicalstorelist`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};



export const allStaffUsersAsync = async () => {
  try {
    const response = await axiosInstance.get(`/allstaffusers`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const allPatientsUsersAsync = async () => {
  try {
    const response = await axiosInstance.get(`/allpatientsusers`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const doctorsByClinicAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/doctorsbyclinic`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const staffByClinicAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/staffbyclinic`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const patientsByClinicAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/patientsbyclinic`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const patientsByClinicAndDoctorAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `/patientsbyclinicanddoctor`,
      payload
    );
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const patientsByDoctorAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/patientsbydoctor`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Fetch user clinic data
export const getUserClinicDataAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/userclinicdata`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Fetch user doctor data
export const getUserDoctorDataAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/userdoctordata`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Fetch user staff data
export const getUserStaffDataAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/userstaffdata`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Fetch user patient data
export const getUserPatientDataAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/userpatientdata`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Update clinic user data
export const updateClinicUserAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/updateclinicuser`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Update staff data
export const updateStaffDataAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/updatestaffdata`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Update patient data
export const updatePatientDataAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/updatepatientdata`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Create an appointment
export const createAppointmentAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/createappointment`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Update an appointment
export const updateAppointmentAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/updateappointment`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Create attendance
export const createAttendanceAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/createattendance`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Update attendance
export const updateAttendanceAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/updateattendance`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Create a blog post
export const createBlogAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/createblog`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Update a blog post
export const updateBlogAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/updateblog`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Create a department
export const createDepartmentAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/createdepartment`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Update a department
export const updateDepartmentAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/updatedepartment`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Create an invoice
export const createInvoiceAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/createinvoice`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Update an invoice
export const updateInvoiceAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/updateinvoice`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Create a medical record
export const createMedicalRecordAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/createmedicalrecord`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Update a medical record
export const updateMedicalRecordAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/updatemedicalrecord`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Create a medical store entry
export const createMedicalStoreAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/createmedicalstore`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Update a medical store entry
export const updateMedicalStoreAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/updatemedicalstore`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Create a prescription
export const createPrescriptionAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/createprescription`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Update a prescription
export const updatePrescriptionAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/updateprescription`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Get prescription by ID
export const getPrescriptionByIdAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/getprescriptionbyid`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Get list of prescriptions
export const getPrescriptionsListAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/getprescriptionslist`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Get appointment by ID
export const getAppointmentByIdAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/getappointmentbyid`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Get list of appointments
export const getAppointmentListAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/getappointmentlist`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Insert a schedule
export const insertScheduleAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/insertschedule`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

// Update a schedule
export const updateScheduleAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/updateschedule`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};
