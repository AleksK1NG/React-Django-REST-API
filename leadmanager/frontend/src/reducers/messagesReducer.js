import { CREATE_MESSAGE } from '../actions/actionTypes'

const initialState = {}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case CREATE_MESSAGE:
      return (state = payload)

    default:
      return state
  }
}
