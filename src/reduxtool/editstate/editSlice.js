import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    doctorEdit: null,
    staffEdit: null,
    departmentEditData:null
}

const editSlice = createSlice({
    name: "edit",
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
        cleanEditState: (state, { payload }) => ({
            ...state,
            doctorEdit: null,
            staffEdit: null,
        })
       
    },
})

export const { doctorEditData, cleanEditState , staffEditData ,departmentEditData} = editSlice.actions

export const editSelector = (state) => state?.EditState

export default editSlice.reducer