import { createSlice } from '@reduxjs/toolkit'
import {
  signUp,
  logIn,
  logOut,
  refreshUser,
  passwordSet,
  passwordReset,
  accessUser,
} from 'store/auth/operations'

const handlePending = (state) => {
  state.isLoading = true
}

const handleRejected = (state) => {
  state.isLoading = false
}

const initialState = {
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  accessTokenExpire: 0,
  refreshTokenExpire: 0,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, handlePending)
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false
        state.accessToken = action.payload.access_token
        state.refreshToken = action.payload.refresh_token
        state.accessTokenExpire = action.payload.token_expire
        state.refreshTokenExpire = action.payload.refresh_token_expire
        state.isLoggedIn = true
      })
      .addCase(signUp.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false
        state.accessToken = action.payload.access_token
        state.refreshToken = action.payload.refresh_token
        state.accessTokenExpire = action.payload.token_expire
        state.refreshTokenExpire = action.payload.refresh_token_expire
        state.isLoggedIn = true
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(accessUser.pending, handlePending)
      .addCase(accessUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.accessToken = action.payload.access_token
        state.refreshToken = action.payload.refresh_token
        state.accessTokenExpire = action.payload.token_expire
        state.refreshTokenExpire = action.payload.refresh_token_expire
        state.isLoggedIn = true
      })
      .addCase(accessUser.rejected, handleRejected)

      .addCase(passwordSet.pending, handlePending)
      .addCase(passwordSet.fulfilled, (state) => {
        state.isLoading = false
        state.isLoggedIn = false
      })
      .addCase(passwordSet.rejected, handleRejected)
      .addCase(passwordReset.pending, handlePending)
      .addCase(passwordReset.fulfilled, (state) => {
        state.isLoading = false
        state.isLoggedIn = false
      })
      .addCase(passwordReset.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false
        state.user = { name: null, email: null, country: null }
        state.token = null
        state.isLoggedIn = false
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false
        state.accessToken = action.payload.access_token
        state.refreshToken = action.payload.refresh_token
        state.accessTokenExpire = action.payload.token_expire
        state.refreshTokenExpire = action.payload.refresh_token_expire
        state.isLoggedIn = true
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false
      })
  },
})

export const authReducer = authSlice.reducer
