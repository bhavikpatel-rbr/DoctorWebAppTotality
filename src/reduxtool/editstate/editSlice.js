import { createSlice } from '@reduxjs/toolkit';
import { updateStaffDataAction } from '../app/middleware';// Update this path

const INITIAL_STATE = {
  doctorEdit: null,
  staffEdit: null,
  departmentEditData: null,
  updateStatus: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
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
    departmentEditData: (state, { payload }) => ({
      ...state,
      departmentEdit: payload,
    }),
    resetUpdateStatus: (state) => {
        state.updateStatus = 'idle'; // or your desired initial state
      },
    cleanEditState: (state) => ({
      ...state,
      doctorEdit: null,
      staffEdit: null,
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

export const { doctorEditData, cleanEditState, staffEditData, departmentEditData ,resetUpdateStatus } = editSlice.actions;

export const editSelector = (state) => state?.EditState;

export default editSlice.reducer;
