import React from 'react'
import ReactDOM from 'react-dom'
import Header from './layout/Header/header'
import Dashboard from './leads/Dashboard/dashboard'
import { Provider } from 'react-redux'
import store from '../store/store'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Alerts from './layout/Alerts/alerts'

/*
 * Alert Options
 * */
const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

const App = () => {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <React.Fragment>
          <Header />
          <Alerts />
          <div className="container">
            <Dashboard />
          </div>
        </React.Fragment>
      </AlertProvider>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

// TODO Run folders
