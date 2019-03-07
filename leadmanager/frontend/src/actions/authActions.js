import axios from 'axios'
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING
} from './actionTypes'
import { returnErrors } from './messagesActions'
import { tokenConfig } from '../utils/auth-helpers'

/*
 * Load User
 * */
export const loadUser = () => (dispatch, getState) => {
  axios
    .get('/api/auth/user', tokenConfig(getState))
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
  axios
    .post('/api/auth/logout', null, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS })
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status))
    })
}

/*
 * Register
 * */
export const register = ({ username, password, email }) => (dispatch) => {
  // Set Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  // Request Body
  const body = JSON.stringify({ username, email, password })
  axios
    .post('/api/auth/register', body, config)
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({ type: REGISTER_FAIL })
    })
}
