import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_HOST

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ''
}

export const signUp = createAsyncThunk('auth/signup', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/users/signup', credentials)

    setAuthHeader(res.data.token)

    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.detail)
  }
})

export const logIn = createAsyncThunk('auth/logIn', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/users/login', credentials)

    setAuthHeader(res.data.token)

    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.detail)
  }
})

export const accessUser = createAsyncThunk(
  'auth/login-by-access-id',
  async (accessId, thunkAPI) => {
    if (accessId === null) {
      return thunkAPI.rejectWithValue('Unable to verify user')
    }

    try {
      const res = await axios.get('/auth/access-token', accessId)

      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.detail)
    }
  },
)

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout')

    clearAuthHeader()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.detail)
  }
})

export const refreshUser = createAsyncThunk('auth/refresh-token', async (_, thunkAPI) => {
  const state = thunkAPI.getState()
  const persistedToken = state.auth.token

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to refresh user')
  }

  try {
    setAuthHeader(persistedToken)
    const res = await axios.get('/auth/refresh-token')

    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.detail)
  }
})

export const passwordReset = createAsyncThunk('auth/password-reset', async (data, thunkAPI) => {
  if (data === null) {
    return thunkAPI.rejectWithValue('Unable to reset the password')
  }

  try {
    const res = await axios.get('/auth/password-reset', data)

    clearAuthHeader()

    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.detail)
  }
})

export const passwordSet = createAsyncThunk('auth/password-set', async (data, thunkAPI) => {
  if (data === null) {
    return thunkAPI.rejectWithValue('Unable to set the password')
  }

  try {
    const res = await axios.get('/auth/password-set', data)

    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.detail)
  }
})
