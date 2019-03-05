import { ADD_LEAD, DELETE_LEAD, GET_ERRORS, GET_LEADS } from './actionTypes'
import axios from 'axios'

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

export const deleteLead = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}/`)
    .then((res) => {
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
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      })
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      }
      dispatch({
        type: GET_ERRORS,
        payload: errors
      })
      console.error(errors)
    })
}
