import { GET_LEADS } from '../actions/actionTypes'

const initialState = {
  leads: []
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_LEADS:
      return { ...state, leads: payload }

    default:
      return state
  }
}
