import { ADD_LEAD, DELETE_LEAD, GET_ERRORS, GET_LEADS } from './actionTypes'
import axios from 'axios'
import { createMessage, returnErrors } from './messagesActions'
import { tokenConfig } from '../utils/auth-helpers'


/*
* Users
* */
export const getLeads = () => (dispatch, getState) => {
  axios
    .get('/api/leads', tokenConfig(getState))
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

export const deleteLead = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/leads/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteLead: 'User Deleted' }))
      dispatch({
        type: DELETE_LEAD,
        payload: id
      })
    })
    .catch((err) => {
      console.error(err)
    })
}

export const addLead = (lead) => (dispatch, getState) => {
  console.log('add lead', lead)
  axios
    .post(`/api/leads/`, lead, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addLead: 'User Added' }))
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      })
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}
