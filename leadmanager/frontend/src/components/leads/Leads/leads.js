import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getLeads, deleteLead } from '../../../actions/leadsActions'

const Leads = (props) => {
  useEffect(() => {
    props.getLeads()
  }, [])

  return (
    <React.Fragment>
      <h2>Leads</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td>
                <button
                  onClick={() => props.deleteLead(lead.id)}
                  className="btn btn-danger btn-sm"
                >
                  {' '}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default connect(
  (state) => ({
    leads: state.leads.leads
  }),
  { getLeads, deleteLead }
)(Leads)
