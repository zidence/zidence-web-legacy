import { createSlice } from '@reduxjs/toolkit'

import * as request from '../../utils/requests'

const authInitialState = {
  isLoading: false,
  error: null,
  accessToken: '',
  userProfile: {},
}

// Slice can generate actions and reducers
// Immutability in reducers is achieved by built-in immer.js
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    registerStart(state) {
      state.isLoading = true
    },
    registerSuccess(state) {
      state.isLoading = false
    },
    registerFailure(state, action) {
      state.isLoading = false
      state.error = action.payload
    },
    loginStart(state) {
      state.isLoading = true
    },
    loginSuccess(state, action) {
      const accessToken = action.payload.accessToken
      state.isLoading = false
      state.accessToken = accessToken
    },
    loginFailure(state, action) {
      state.isLoading = false
      state.error = action.payload
    },
    logoutStart(state) {
      state.isLoading = true
    },
    logoutSuccess(state) {
      state.isLoading = false
      state.accessToken = ''
      state.userProfile = {}
    },
    logoutFailure(state, action) {
      state.isLoading = false
      state.error = action.payload
    },
    getProfileStart(state) {
      state.isLoading = true
    },
    getProfileSuccess(state, action) {
      state.isLoading = false
      state.userProfile = action.payload
    },
    getProfileFailure(state, action) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

// Define and export thunk actions
const {
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  getProfileStart,
  getProfileSuccess,
  getProfileFailure,
} = authSlice.actions

export const register = (username, email, password) => async (dispatch) => {
  dispatch(registerStart())
  try {
    await request.register(username, email, password)
    dispatch(registerSuccess())
  } catch (error) {
    dispatch(registerFailure(error))
  }
}

export const login = (email, password) => async (dispatch) => {
  dispatch(loginStart())
  try {
    const response = await request.login(email, password)
    dispatch(loginSuccess(response.data))
  } catch (error) {
    dispatch(loginFailure(error))
  }
}

export const logout = (accessToken) => async (dispatch) => {
  dispatch(logoutStart())
  try {
    await request.logout(accessToken)
    dispatch(logoutSuccess())
  } catch (error) {
    dispatch(logoutFailure(error))
  }
}

export const getProfile = (accessToken) => async (dispatch) => {
  dispatch(getProfileStart())
  try {
    const response = await request.logout(accessToken)
    dispatch(getProfileSuccess(response.data))
  } catch (error) {
    dispatch(getProfileFailure(error))
  }
}

export default authSlice.reducer
