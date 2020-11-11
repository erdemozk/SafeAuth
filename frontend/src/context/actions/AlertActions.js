import alertObject from "../utils/alertObject"
const newAlert = (message, color, setAlerts, alerts) => {
  const alert = alertObject(message, color)
  setAlerts([...alerts, alert])

  setTimeout(() => {
    setAlerts(alerts.filter((currentAlert) => currentAlert.id !== alert.id))
  }, 5000)
}

export { newAlert }
