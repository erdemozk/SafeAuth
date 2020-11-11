import alertObject from "../utils/alertObject"
const newAlert = (message, color, setAlerts, alerts) => {
  const alert = alertObject(message, color)
  setAlerts([...alerts, alert])
}

export { newAlert }
