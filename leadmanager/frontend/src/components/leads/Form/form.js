import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addLead } from '../../../actions/leadsActions'

const Form = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    const lead = { name, email, message }

    props.addLead(lead)

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add User</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            type="text"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default connect(
  null,
  { addLead }
)(Form)
