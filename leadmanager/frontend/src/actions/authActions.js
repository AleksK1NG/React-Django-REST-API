import axios from 'axios'
import { AUTH_ERROR, USER_LOADED, USER_LOADING } from './actionTypes'
import { returnErrors } from './messagesActions'

/*
 *
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
    .get('/pai/auth/user', config)
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data })
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({ type: AUTH_ERROR })
    })
}
