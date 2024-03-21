import axios from 'helpers/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ApiRoute, AppRoute, Notification } from 'enums'

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ''
}

export const signUp = createAsyncThunk(AppRoute.SIGN_UP, async (credentials, thunkAPI) => {
  try {
    const res = await axios.post(ApiRoute.SIGN_UP, credentials)

    setAuthHeader(res.data.token)

    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const logIn = createAsyncThunk(
  AppRoute.LOG_IN_BY_CREDENTIALS,
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(ApiRoute.LOG_IN_BY_CREDENTIALS, credentials)

      setAuthHeader(res.data.token)

      return res.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const accessUser = createAsyncThunk(AppRoute.LOGIN_BY_CODE, async (accessId, thunkAPI) => {
  try {
    const res = await axios.post(ApiRoute.LOG_IN_BY_CODE, accessId)

    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const logOut = createAsyncThunk(AppRoute.LOG_OUT, async (_, thunkAPI) => {
  try {
    await axios.post(ApiRoute.LOG_OUT)

    clearAuthHeader()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const refreshUser = createAsyncThunk(AppRoute.REFRESH_TOKEN, async (_, thunkAPI) => {
  const state = thunkAPI.getState()
  const accessToken = state.auth.accessToken

  if (accessToken === null) {
    return thunkAPI.rejectWithValue(Notification.cantRefreshUser)
  }

  try {
    setAuthHeader(accessToken)
    const res = await axios.post(ApiRoute.REFRESH_TOKEN)

    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const passwordReset = createAsyncThunk(AppRoute.RESET_PASSWORD, async (data, thunkAPI) => {
  if (data === null) {
    return thunkAPI.rejectWithValue(Notification.cantResetPassword)
  }

  try {
    const res = await axios.post(ApiRoute.RESET_PASSWORD, data)

    clearAuthHeader()

    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const passwordSet = createAsyncThunk(AppRoute.RESTORE_PASSWORD, async (data, thunkAPI) => {
  const state = thunkAPI.getState()
  const accessToken = state.auth.accessToken
  const secret = state.auth.refreshToken

  if (!data || !accessToken || !secret) {
    return thunkAPI.rejectWithValue(Notification.cantUpdatePassword)
  }

  try {
    const res = await axios.post(ApiRoute.RESTORE_PASSWORD, {
      ...data,
      accessToken,
      secret,
    })

    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
