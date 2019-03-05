import React from 'react'
import ReactDOM from 'react-dom'
import Header from './layout/Header/header'
import Dashboard from './leads/Dashboard/dashboard'
import { Provider } from 'react-redux'
import store from '../store/store'

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </React.Fragment>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

// TODO Run folders
