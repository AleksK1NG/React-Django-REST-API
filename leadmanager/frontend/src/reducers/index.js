import { combineReducers } from 'redux'
import leadsReducer from './leadsReducer'
import errorsReducer from './errorsReducer'
import messagesReducer from './messagesReducer'

export default combineReducers({
  leads: leadsReducer,
  errors: errorsReducer,
  messages: messagesReducer
})
