import { createAsyncThunk } from "@reduxjs/toolkit"

import { loginWithEmailAsync, logoutAsync, registerWithEmailAsync } from "./services"
import { hideLoader, showLoader, showMessage } from "../lem/lemSlice"
import { defaultMessageObj } from "../../utils/hooks"

export const logoutAction = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response = await logoutAsync()
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "error",
            messageText: response?.data?.message,
          }))
        return true
      }
      
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        }))
      return rejectWithValue(response)
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)


export const loginAdminByEmailAction = createAsyncThunk(
  "auth/loginByEmail",
  async (loginRequest, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response = await loginWithEmailAsync(loginRequest)
      if (response?.data) {
        dispatch(hideLoader())
        return response?.data
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        }))
      return rejectWithValue(response)
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)

export const registerAdminByEmailAction = createAsyncThunk(
  "auth/registerByEmail",
  async (registerRequest, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response = await registerWithEmailAsync(registerRequest)

      if (response?.data) {
        dispatch(hideLoader())
        return response?.data
      }

      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.message,
        }))
      return rejectWithValue(response)
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)
