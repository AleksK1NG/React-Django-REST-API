import { AUTH_ERROR, USER_LOADED, USER_LOADING } from '../actions/actionTypes'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case USER_LOADING:
      return { ...state, isLoading: true }

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: payload
      }

    case AUTH_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      }

    default:
      return state
  }
}
