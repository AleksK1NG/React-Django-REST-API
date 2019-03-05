import React, { useEffect } from 'react'
import { useAlert } from 'react-alert'

const Alerts = (props) => {
  const alert = useAlert()

  useEffect(() => {
    alert.show('Oh look, an alert!')
  }, [])

  return <React.Fragment />
}

export default Alerts

