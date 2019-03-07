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
    if (props.error.msg.non_field_errors)
      alert.error(props.error.msg.non_field_errors.join())
    if (props.error.msg.username) alert.error(props.error.msg.username.join());
    // alert.show('Oh look, an alert!')
    if (props.message) {
      if (props.message.deleteLead) alert.success(props.message.deleteLead)
      if (props.message.addLead) alert.success(props.message.addLead)
      if (props.message.passwordNotMatch)
        alert.error(props.message.passwordNotMatch)
    }
  }, [props.error, props.message])

  return <React.Fragment />
}

export default connect(
  (state) => ({
    error: state.errors,
    message: state.messages
  }),
  {}
)(Alerts)
