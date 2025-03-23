import { createAsyncThunk } from "@reduxjs/toolkit";

import { hideLoader, showLoader, showMessage } from "../lem/lemSlice";

import { defaultMessageObj } from "../../utils/hooks";
import {
  allClinicsUsersAsync,
  allDoctorsUsersAsync,
  allPatientsUsersAsync,
  allStaffUsersAsync,
  getAllUserAsync,
  registerClinicAsync,
  registerDoctorAsync,
  registerPatientAsync,
  registerStaffAsync,
  doctorsByClinicAsync,
  staffByClinicAsync,
  patientsByClinicAsync,
  patientsByClinicAndDoctorAsync,
  patientsByDoctorAsync,
  getUserClinicDataAsync,
  getUserDoctorDataAsync,
  getUserStaffDataAsync,
  getUserPatientDataAsync,
  updateClinicUserAsync,
  updateStaffDataAsync,
  updatePatientDataAsync,
  createAppointmentAsync,
  updateAppointmentAsync,
  createAttendanceAsync,
  updateAttendanceAsync,
  createBlogAsync,
  updateBlogAsync,
  createDepartmentAsync,
  updateDepartmentAsync,
  createInvoiceAsync,
  updateInvoiceAsync,
  createMedicalRecordAsync,
  updateMedicalRecordAsync,
  createMedicalStoreAsync,
  updateMedicalStoreAsync,
  createPrescriptionAsync,
  updatePrescriptionAsync,
  getPrescriptionByIdAsync,
  getPrescriptionsListAsync,
  getAppointmentByIdAsync,
  getAppointmentListAsync,
  insertScheduleAsync,
  updateScheduleAsync,
  userDetailsAsync,
  getdepartmentlistAsync,
  getbloglistlistAsync,
  getschedulelistAsync,
  getMedicallistlistAsync,
  allDoctorsUsersWhenSignupAsync,
} from "./service";
import { useNavigate } from "react-router-dom";


export const getAllUserAction = createAsyncThunk(
  "auth/getAllUser",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await getAllUserAsync();
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);


export const registerDoctorAction = createAsyncThunk(
  "auth/registerDoctor",
  
  async (payload ,  { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
     
      const response = await registerDoctorAsync(payload);
      if (response?.data) {
        dispatch(hideLoader());
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          })
        );
      
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const registerClinicAction = createAsyncThunk(
  "auth/registerClinic",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await registerClinicAsync(payload);
      if (response?.data) {
        dispatch(hideLoader());
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          })
        );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const registerStaffAction = createAsyncThunk(
  "auth/registerStaff",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await registerStaffAsync(payload);
      if (response?.data) {
         dispatch(hideLoader());
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          })
        );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const registerPatientAction = createAsyncThunk(
  "auth/registerPatient",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await registerPatientAsync(payload);
      if (response?.data) {
        dispatch(hideLoader());
        // dispatch(
        //   showMessage({
        //     ...defaultMessageObj,
        //     type: "success",
        //     messageText: response?.data?.message,
        //   })
        // );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const allClinicsUsersAction = createAsyncThunk(
  "auth/allClinicsUsers",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await allClinicsUsersAsync();
      if (response?.data) {
        dispatch(hideLoader());
        // dispatch(
        //   showMessage({
        //     ...defaultMessageObj,
        //     type: "success",
        //     messageText: response?.data?.message,
        //   })
        // );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const  allDoctorsUsersAction = createAsyncThunk(
  "auth/allDoctorsUsers",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await allDoctorsUsersAsync();
      if (response?.data) {
        dispatch(hideLoader());
        // dispatch(
        //   showMessage({
        //     ...defaultMessageObj,
        //     type: "success",
        //     messageText: response?.data?.message,
        //   })
        // );
       
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const  allDoctorsUsersWhenSignupAction = createAsyncThunk(
  "auth/allDoctorsUsersWhenSignup",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await allDoctorsUsersWhenSignupAsync();
      console.log("response",response);
      
      if (response?.data) {
        dispatch(hideLoader());
        // dispatch(
        //   showMessage({
        //     ...defaultMessageObj,
        //     type: "success",
        //     messageText: response?.data?.message,
        //   })
        // );
       
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const  getdepartmentlistAction = createAsyncThunk(
  "auth/getdepartmentlist",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await getdepartmentlistAsync();
      if (response?.data) {
        dispatch(hideLoader());
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          })
        );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const  getschedulelistAction = createAsyncThunk(
  "auth/getscheduleslist",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await getschedulelistAsync();
      if (response?.data) {
        dispatch(hideLoader());
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          })
        );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const  getbloglistAction = createAsyncThunk(
  "auth/getbloglist",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await getbloglistlistAsync();
      if (response?.data) {
        dispatch(hideLoader());
        // dispatch(
        //   showMessage({
        //     ...defaultMessageObj,
        //     type: "success",
        //     messageText: response?.data?.message,
        //   })
        // );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const  getMedicallistAction = createAsyncThunk(
  "auth/getmedicalstorelist",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await getMedicallistlistAsync();
      if (response?.data) {
        dispatch(hideLoader());
        // dispatch(
        //   showMessage({
        //     ...defaultMessageObj,
        //     type: "success",
        //     messageText: response?.data?.message,
        //   })
        // );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);
export const allStaffUsersAction = createAsyncThunk(
  "auth/allStaffUsers",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await allStaffUsersAsync();
      if (response?.data) {
        dispatch(hideLoader());
        // dispatch(
        //   showMessage({
        //     ...defaultMessageObj,
        //     type: "success",
        //     messageText: response?.data?.message,
        //   })
        // );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const allPatientsUsersAction = createAsyncThunk(
  "auth/allPatientsUsers",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await allPatientsUsersAsync();
      if (response?.data) {
        dispatch(hideLoader());
        // dispatch(
        //   showMessage({
        //     ...defaultMessageObj,
        //     type: "success",
        //     messageText: response?.data?.message,
        //   })
        // );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const doctorsByClinicAction = createAsyncThunk(
  "auth/doctorsByClinic",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await doctorsByClinicAsync(payload);
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          })
        );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const staffByClinicAction = createAsyncThunk(
  "auth/staffByClinic",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await staffByClinicAsync(payload);
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          })
        );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const patientsByClinicAction = createAsyncThunk(
  "auth/patientsByClinic",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await patientsByClinicAsync(payload);
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          })
        );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const patientsByClinicAndDoctorAction = createAsyncThunk(
  "auth/patientsByClinicAndDoctor",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await patientsByClinicAndDoctorAsync(payload);
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          })
        );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const patientsByDoctorAction = createAsyncThunk(
  "auth/patientsByDoctor",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await patientsByDoctorAsync(payload);
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          })
        );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Fetch user clinic data
export const getUserClinicDataAction = createAsyncThunk(
  "auth/getUserClinicData",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Fetching user clinic data..." })
    );
    try {
      const response = await getUserClinicDataAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Fetch user doctor data
export const getUserDoctorDataAction = createAsyncThunk(
  "auth/getUserDoctorData",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Fetching user doctor data..." })
    );
    try {
      const response = await getUserDoctorDataAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Fetch user staff data
export const getUserStaffDataAction = createAsyncThunk(
  "auth/getUserStaffData",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Fetching user staff data..." })
    );
    try {
      const response = await getUserStaffDataAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Fetch user patient data
export const getUserPatientDataAction = createAsyncThunk(
  "auth/getUserPatientData",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Fetching user patient data..." })
    );
    try {
      const response = await getUserPatientDataAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Update clinic user data
export const updateClinicUserAction = createAsyncThunk(
  "auth/updateClinicUser",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Updating clinic user data..." })
    );
    try {
      const response = await updateClinicUserAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Update staff data
export const updateStaffDataAction = createAsyncThunk(
  "auth/updateStaffData",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Updating staff data..." }));
    try {
      const response = await updateStaffDataAsync(payload);
      dispatch(hideLoader());
      if (response?.status) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.message || "Something went wrong",
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Update patient data
export const updatePatientDataAction = createAsyncThunk(
  "auth/updatePatientData",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Updating patient data..." })
    );
    try {
      const response = await updatePatientDataAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Create an appointment
export const createAppointmentAction = createAsyncThunk(
  "auth/createAppointment",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Creating appointment..." }));
    try {
      const response = await createAppointmentAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Update an appointment
export const updateAppointmentAction = createAsyncThunk(
  "auth/updateAppointment",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Updating appointment..." }));
    try {
      const response = await updateAppointmentAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Create attendance
export const createAttendanceAction = createAsyncThunk(
  "auth/createAttendance",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Creating attendance..." }));
    try {
      const response = await createAttendanceAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Update attendance
export const updateAttendanceAction = createAsyncThunk(
  "auth/updateAttendance",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Updating attendance..." }));
    try {
      const response = await updateAttendanceAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Create a blog post
export const createBlogAction = createAsyncThunk(
  "auth/createBlog",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Creating blog post..." }));
    try {
      const response = await createBlogAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Update a blog post
export const updateBlogAction = createAsyncThunk(
  "auth/updateBlog",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Updating blog post..." }));
    try {
      const response = await updateBlogAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);



// Create a department
export const createDepartmentAction = createAsyncThunk(
  "auth/createDepartment",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Creating department..." }));
    try {
      const response = await createDepartmentAsync(payload);
      dispatch(hideLoader());
      if (response?.data?.status) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message || response?.message ,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Update a department
export const updateDepartmentAction = createAsyncThunk(
  "auth/updateDepartment",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Updating department..." }));
    try {
      const response = await updateDepartmentAsync(payload);
      dispatch(hideLoader());
      console.log(response);
      
      if (response?.data?.status) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message || response?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Create an invoice
export const createInvoiceAction = createAsyncThunk(
  "auth/createInvoice",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Creating invoice..." }));
    try {
      const response = await createInvoiceAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Update an invoice
export const updateInvoiceAction = createAsyncThunk(
  "auth/updateInvoice",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Updating invoice..." }));
    try {
      const response = await updateInvoiceAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Create a medical record
export const createMedicalRecordAction = createAsyncThunk(
  "auth/createMedicalRecord",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Creating medical record..." })
    );
    try {
      const response = await createMedicalRecordAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Update a medical record
export const updateMedicalRecordAction = createAsyncThunk(
  "auth/updateMedicalRecord",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Updating medical record..." })
    );
    try {
      const response = await updateMedicalRecordAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Create a medical store entry
export const createMedicalStoreAction = createAsyncThunk(
  "auth/createMedicalStore",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Creating medical store entry..." })
    );
    try {
      const response = await createMedicalStoreAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Update a medical store entry
export const updateMedicalStoreAction = createAsyncThunk(
  "auth/updateMedicalStore",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Updating medical store entry..." })
    );
    try {
      const response = await updateMedicalStoreAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Create a prescription
export const createPrescriptionAction = createAsyncThunk(
  "auth/createPrescription",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Creating prescription..." })
    );
    try {
      const response = await createPrescriptionAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Update a prescription
export const updatePrescriptionAction = createAsyncThunk(
  "auth/updatePrescription",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Updating prescription..." })
    );
    try {
      const response = await updatePrescriptionAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Get prescription by ID
export const getPrescriptionByIdAction = createAsyncThunk(
  "auth/getPrescriptionById",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Fetching prescription..." })
    );
    try {
      const response = await getPrescriptionByIdAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Get list of prescriptions
export const getPrescriptionsListAction = createAsyncThunk(
  "auth/getPrescriptionsList",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Fetching prescriptions..." })
    );
    try {
      const response = await getPrescriptionsListAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Get appointment by ID
export const getAppointmentByIdAction = createAsyncThunk(
  "auth/getAppointmentById",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Fetching appointment..." }));
    try {
      const response = await getAppointmentByIdAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Get list of appointments
export const getAppointmentListAction = createAsyncThunk(
  "auth/getAppointmentList",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(
      showLoader({ loading: true, message: "Fetching appointments..." })
    );
    try {
      const response = await getAppointmentListAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Insert a schedule
export const insertScheduleAction = createAsyncThunk(
  "auth/insertSchedule",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Inserting schedule..." }));
    try {
      const response = await insertScheduleAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

// Update a schedule
export const updateScheduleAction = createAsyncThunk(
  "auth/updateSchedule",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Updating schedule..." }));
    try {
      const response = await updateScheduleAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const userDetailsAction = createAsyncThunk(
  "auth/userDetails",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "Updating schedule..." }));
    try {
      const response = await userDetailsAsync(payload);
      dispatch(hideLoader());
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response.data.message,
          })
        );
        return response.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response.data.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);
