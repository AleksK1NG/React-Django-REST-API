import React from 'react'
import ReactDOM from 'react-dom'
import Header from './layout/Header/header'
import Dashboard from './leads/Dashboard/dashboard'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Dashboard />
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

// TODO Run folders
