import { ADD_LEAD, DELETE_LEAD, GET_LEADS } from '../actions/actionTypes'

const initialState = {
  leads: []
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_LEADS:
      return { ...state, leads: payload }

    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, payload]
      }

    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== payload)
      }

    default:
      return state
  }
}
