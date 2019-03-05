import { GET_LEADS } from './actionTypes'
import axios from 'axios'

// export const getLeads = () => async (dispatch) => {
//   try {
//     const res = await axios.get('/api/leads')
//     dispatch({
//       type: GET_LEADS,
//       payload: res.data
//     })
//   } catch (e) {
//     console.error(e)
//   }
// }

export const getLeads = () => (dispatch) => {
  axios
    .get('/api/leads')
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      })
    })
    .catch((err) => {
      console.error(err)
    })
}
