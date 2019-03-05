import React, { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { connect } from 'react-redux'

const Alerts = (props) => {
  const alert = useAlert()

  useEffect(() => {
    if (props.error.msg.name)
      alert.error(`Name: ${props.error.msg.name.join()}`)
    if (props.error.msg.email)
      alert.error(`Email: ${props.error.msg.email.join()}`)
    if (props.error.msg.message)
      alert.error(`Message: ${props.error.msg.message.join()}`)

    // alert.show('Oh look, an alert!')
  }, [props.error])

  return <React.Fragment />
}

export default connect(
  (state) => ({
    error: state.errors
  }),
  {}
)(Alerts)
