import { combineReducers } from 'redux'
import leadsReducer from './leadsReducer'
import errorsReducer from './errorsReducer'
import messagesReducer from './messagesReducer'
import authReducer from './authReducer'

export default combineReducers({
  leads: leadsReducer,
  errors: errorsReducer,
  messages: messagesReducer,
  auth: authReducer
})
