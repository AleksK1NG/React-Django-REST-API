import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../../actions/authActions'

const Header = (props) => {
  const authLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <span className="navbar-text mr-3">
        <strong>{props.user ? `Welcome ${props.user.username}` : ''}</strong>
      </span>
      <li className="nav-item">
        <button
          onClick={props.logout}
          className="nav-link btn btn-info btn-sm text-light"
        >
          Logout
        </button>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    </ul>
  )

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            Users Manager
          </a>
        </div>
        {props.isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
  )
}

export default connect(
  (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  }),
  { logout }
)(Header)
