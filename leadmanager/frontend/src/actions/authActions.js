import axios from 'axios'
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_LOADED,
  USER_LOADING
} from './actionTypes'
import { returnErrors } from './messagesActions'

/*
 * Load User
 * */
export const loadUser = () => (dispatch, getState) => {
  // Load user
  dispatch({ type: USER_LOADING })

  // Get token from auth state
  const token = getState().auth.token
  // Set Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  axios
    .get('/api/auth/user', config)
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data })
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({ type: AUTH_ERROR })
    })
}

/*
 * Login
 * */
export const login = (username, password) => (dispatch) => {
  // Load user
  dispatch({ type: USER_LOADING })

  // Set Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  // Request Body
  const body = JSON.stringify({ username, password })
  axios
    .post('/api/auth/login', body, config)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({ type: LOGIN_FAIL })
    })
}

/*
 * Logout
 * */
export const logout = () => (dispatch, getState) => {
  // Get token from state
  const token = getState().auth.token

  // Set Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  axios
    .post('/api/auth/logout', null, config)
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS })
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status))
    })
}
