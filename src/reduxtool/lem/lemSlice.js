import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  loading: false,
  message: "",
}

const lemSlice = createSlice({
  name: "Lem",
  initialState: INITIAL_STATE,
  reducers: {
    showLoader: (state, { payload }) => ({
      ...state,
      loading: payload.loading,
      message: payload.message,
    }),

    hideLoader: (state) => ({
      ...state,
      loading: false,
      message: "",
    }),

    showMessage: (state, { payload }) => ({
      ...state,
      loading: false,
      message: payload,
    }),

    hideMessage: (state) => ({
      ...state,
      loading: false,
      message: undefined,
    }),
  },
})

export const { showLoader, hideLoader, showMessage, hideMessage } = lemSlice.actions

export const lemSelector = (state) => state?.Lem

export default lemSlice.reducer