const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'SOME_CASE':
      return { ...state, payload }

    default:
      return state
  }
}
