import { createSlice } from "@reduxjs/toolkit";
import {
  allClinicsUsersAction,
  allDoctorsUsersAction,
  allDoctorsUsersWhenSignupAction,
  allPatientsUsersAction,
  allStaffUsersAction,
  getAllUserAction,
  registerClinicAction,
  registerDoctorAction,
  registerPatientAction,
  registerStaffAction,
  getUserClinicDataAction,
  getUserDoctorDataAction,
  getUserStaffDataAction,
  getUserPatientDataAction,
  updateClinicUserAction,
  updateStaffDataAction,
  updatePatientDataAction,
  createAppointmentAction,
  updateAppointmentAction,
  createAttendanceAction,
  updateAttendanceAction,
  createBlogAction,
  updateBlogAction,
  createDepartmentAction,
  updateDepartmentAction,
  createInvoiceAction,
  updateInvoiceAction,
  createMedicalRecordAction,
  updateMedicalRecordAction,
  createMedicalStoreAction,
  updateMedicalStoreAction,
  createPrescriptionAction,
  updatePrescriptionAction,
  getPrescriptionByIdAction,
  getPrescriptionsListAction,
  getAppointmentByIdAction,
  getAppointmentListAction,
  insertScheduleAction,
  updateScheduleAction,
  userDetailsAction,
  getdepartmentlistAction,
  getbloglistAction,
  getschedulelistAction,
  getMedicallistAction,
} from "./middleware";
import { getMedicallistlistAsync } from "./service";

const INITIAL_STATE = {
  users: null,
  patientList: null,
  adminProfile: null,
  sheduleList: null,
  doctorList: [],
};

const appSlice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUserAction.fulfilled, (state, { payload }) => ({
      ...state,
      users: payload?.users,
    }));
    builder.addCase(registerDoctorAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(registerClinicAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(registerStaffAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(registerPatientAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(allClinicsUsersAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(allDoctorsUsersAction.fulfilled, (state, { payload }) => ({
      ...state,
      doctorList: payload?.data
    }));
    builder.addCase(allDoctorsUsersWhenSignupAction.fulfilled, (state, { payload }) => ({
      ...state,
      doctorListWhenSignup: payload?.users
    }));

    builder.addCase(getschedulelistAction.fulfilled, (state, { payload }) => ({
      ...state,
      scheduleList: payload?.data
    }));
    builder.addCase(getdepartmentlistAction.fulfilled, (state, { payload }) => ({
      ...state,
      departmentList: payload?.data
    }));
    builder.addCase(getbloglistAction.fulfilled, (state, { payload }) => ({
      ...state,
      bloglist: payload?.data
    }));
    builder.addCase(getMedicallistAction.fulfilled, (state, { payload }) => ({
      ...state,
      Medicallist: payload?.data
    }));

    builder.addCase(allStaffUsersAction.fulfilled, (state, { payload }) => ({
      ...state,
      Stafflist: payload?.data
    }));
    builder.addCase(allPatientsUsersAction.fulfilled, (state, { payload }) => ({
      ...state,
      patientList: payload?.data,
    }));
    builder.addCase(
      getUserClinicDataAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(
      getUserDoctorDataAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(getUserStaffDataAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(
      getUserPatientDataAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(updateClinicUserAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(updateStaffDataAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(
      updatePatientDataAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(
      createAppointmentAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(
      updateAppointmentAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(createAttendanceAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(updateAttendanceAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(createBlogAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(updateBlogAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(createDepartmentAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(updateDepartmentAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(createInvoiceAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(updateInvoiceAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(
      createMedicalRecordAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(
      updateMedicalRecordAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(
      createMedicalStoreAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(
      updateMedicalStoreAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(
      createPrescriptionAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(
      updatePrescriptionAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(
      getPrescriptionByIdAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(
      getPrescriptionsListAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(
      getAppointmentByIdAction.fulfilled,
      (state, { payload }) => ({
        ...state,
      })
    );
    builder.addCase(
      getAppointmentListAction.fulfilled,
      (state, { payload }) => ({
        ...state,
        AppointmentList: payload?.data


      })
    );
    builder.addCase(insertScheduleAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(updateScheduleAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(userDetailsAction.fulfilled, (state, { payload }) => ({
      ...state,
      adminProfile: payload?.user
    }));
  },
});

export const appSelector = (state) => state?.App;

export default appSlice.reducer;
