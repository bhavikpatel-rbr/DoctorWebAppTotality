import { createSlice } from '@reduxjs/toolkit';
import { updateStaffDataAction } from '../app/middleware';// Update this path

const INITIAL_STATE = {
  doctorEdit: null,
  staffEdit: null,
  departmentEditData: null,
  updateStatus: 'idle',
  SheduleEditData:null,
  blogEditData:null,  
  medicalStoreEditData:null
};

const editSlice = createSlice({
  name: 'edit',
  initialState: INITIAL_STATE,
  reducers: {
    doctorEditData: (state, { payload }) => ({
      ...state,
      doctorEdit: payload,
    }),
    staffEditData: (state, { payload }) => ({
      ...state,
      staffEdit: payload,
    }),
    patientEditData: (state, { payload }) => ({
      ...state,
      patientEdit: payload,
    }),
    departmentEditData: (state, { payload }) => ({
      ...state,
      departmentEdit: payload,
    }),
    blogEditData: (state, { payload }) => ({
      ...state,
      blogEdit: payload,
    }),
    medicalStoreEditData: (state, { payload }) => ({
      ...state,
      medicalStoreEdit: payload,
    }),
    SheduleEditData: (state, { payload }) => ({
      ...state,
      sheduleEdit: payload,
    }),
    resetUpdateStatus: (state, { payload }) => ({
      ...state,
      departmentEdit: payload,
    }),
    cleanEditState: (state) => ({
      ...state,
      doctorEdit: null,
      staffEdit: null,
      departmentEdit: null,
      SheduleEditData:null,
      patientEditData:null,
      blogEditData:null,
      medicalStoreEditData:null
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateStaffDataAction.pending, (state) => {
        state.updateStatus = 'loading';
      })
      .addCase(updateStaffDataAction.fulfilled, (state) => {
        state.updateStatus = 'succeeded';
      })
      .addCase(updateStaffDataAction.rejected, (state) => {
        state.updateStatus = 'failed';
      });
  },
});

export const { doctorEditData, cleanEditState, staffEditData,medicalStoreEditData, departmentEditData,blogEditData,SheduleEditData, resetUpdateStatus ,patientEditData} = editSlice.actions;

export const editSelector = (state) => state?.EditState;

export default editSlice.reducer;
