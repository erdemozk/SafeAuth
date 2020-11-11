import React, { createContext, useEffect, useState } from "react"
import alertObject from "./utils/alertObject"

export const AlertContext = createContext()

const AlertContextProvider = (props) => {
  const [alerts, setAlerts] = useState([])
  let lastAlertID

  function addAlert(message, color) {
    newAlert(message, color, setAlerts, alerts)
  }

  const newAlert = (message, color, setAlerts, alerts) => {
    const alert = alertObject(message, color)
    lastAlertID = alert.id
    setAlerts([...alerts, alert])
  }

  useEffect(() => {
    setTimeout(() => {
      setAlerts(
        alerts.filter((currentAlert) => currentAlert.id !== lastAlertID)
      )
    }, 2500)
  }, [alerts, lastAlertID])

  return (
    <AlertContext.Provider value={{ alerts, addAlert }}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertContextProvider
