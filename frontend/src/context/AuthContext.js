import React, { createContext, useContext, useState } from "react"
import { registerAction } from "./actions/AuthActions"
import { AlertContext } from "./AlertContext"

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const { alerts, addAlert } = useContext(AlertContext)

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  function registerUser(user) {
    registerAction(user, setToken, addAlert, alerts)
  }

  return (
    <AuthContext.Provider value={{ user, setUser, registerUser, token }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
