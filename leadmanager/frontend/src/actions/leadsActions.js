import { ADD_LEAD, DELETE_LEAD, GET_ERRORS, GET_LEADS } from './actionTypes'
import axios from 'axios'
import { createMessage, returnErrors } from './messagesActions'

export const getLeads = () => (dispatch) => {
  axios
    .get('/api/leads')
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      })
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}

export const deleteLead = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}/`)
    .then((res) => {
      dispatch(createMessage({ deleteLead: 'Lead Deleted' }))
      dispatch({
        type: DELETE_LEAD,
        payload: id
      })
    })
    .catch((err) => {
      console.error(err)
    })
}


export const addLead = (lead) => (dispatch) => {
  console.log('add lead', lead)
  axios
    .post(`/api/leads/`, lead)
    .then((res) => {
      dispatch(createMessage({ addLead: 'Lead Added' }))
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      })
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}
