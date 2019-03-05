import { GET_ERRORS } from '../actions/actionTypes'

const initialState = {
  msg: {},
  status: null
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_ERRORS:
      return {
        ...state,
        msg: payload.msg,
        status: payload.status
      }

    default:
      return state
  }
}
