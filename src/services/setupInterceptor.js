import { getUserLocalAccessToken } from "./usertoken";

const onRequest = (config) => {
  const token = getUserLocalAccessToken()
  if (config.headers) {
    if (token) {
      config.headers.Authorization = `${token}`;
    }
  }
  return config
}

const onRequestError = (error) => Promise.reject(error)

const onResponse = (response) => response

const onResponseError = async (error) => Promise.reject(error)

export const setupInterceptorsTo = (axiosObj) => {
  axiosObj?.interceptors?.request?.use(onRequest, onRequestError)
  axiosObj?.interceptors?.response?.use(onResponse, onResponseError)
  return axiosObj
}