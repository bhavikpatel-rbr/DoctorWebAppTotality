import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    sidebarState: false,
    
    // delete modal
    isOpenDelete: false,
    title: "",
    subTitle: "",
    deleteType: "",
    deleteId: ""
}

const stateSlice = createSlice({
    name: "state",
    initialState: INITIAL_STATE,
    reducers: {
        deleteModal: (state, { payload }) => ({
            ...state,
            isOpenDelete: payload.isOpenDelete,
            title: payload.title,
            subTitle: payload.subTitle,
            deleteType: payload.deleteType,
            deleteId: payload.deleteId,
        }),
        closeModal: (state) => ({
            ...state,
            isOpenDelete: false,
            title: "",
            subTitle: "",
            deleteId: "",
        }),
        sidebarOpen: (state, { payload }) => ({
            ...state,
            sidebarState: payload.sidebarState,
        }),
        changeState: (state, { payload }) => {
            switch (payload.type) {
                case 'set':
                    return { ...state, sidebarShow: payload?.sidebarShow, sidebarUnfoldable: payload?.sidebarUnfoldable }
                default:
                    return state
            }
        },
    },
})

export const { deleteModal, changeState, closeModal, sidebarOpen } = stateSlice.actions

export const stateSelector = (state) => state?.State

export default stateSlice.reducer