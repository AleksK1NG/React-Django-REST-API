import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './layout/Header/header'
import Dashboard from './leads/Dashboard/dashboard'
import store from '../store/store'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Alerts from './layout/Alerts/alerts'
import Login from './accounts/login/login'
import Register from './accounts/register/register'

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
        <Router>
          <React.Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </AlertProvider>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
