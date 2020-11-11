import React, { createContext, useState } from "react"

export const AlertContext = createContext()

const AlertContextProvider = (props) => {
  const [alerts, setAlerts] = useState([])

  return (
    <AlertContext.Provider value={{ alerts, setAlerts }}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertContextProvider
