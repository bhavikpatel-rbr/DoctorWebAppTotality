import { createSlice } from "@reduxjs/toolkit";
import {
  loginAdminByEmailAction,
  logoutAction,
  registerAdminByEmailAction,
} from "./middleware";

const INITIAL_STATE = {
  token: "",
  userDetails: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, (state) => {
      console.log("User logged out. Clearing userDetails.");
      return {
        ...state,
        token: undefined,
        userDetails: null,
      };
    });

    builder.addCase(loginAdminByEmailAction.fulfilled, (state, { payload }) => {
      console.log("User Logged In:", payload?.user); // Logging user details
      return {
        ...state,
        token: payload?.access_token,
        userDetails: payload?.user,
      };
    });

    builder.addCase(registerAdminByEmailAction.fulfilled, (state, { payload }) => {
      console.log("User Registered:", payload); // Logging user details
      return {
        ...state,
        token: payload?.access_token,
        userDetails: payload?.user,
      };
    });
  },
});

export const authSelector = (state) => state?.Auth;

export default authSlice.reducer;
