import React, { createContext, useContext, useEffect, useState } from "react"
import {
  registerAction,
  getUserAction,
  logoutAction,
  loginAction,
} from "./actions/AuthActions"
import { AlertContext } from "./AlertContext"

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const { addAlert } = useContext(AlertContext)

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  function registerUser(user) {
    registerAction(user, setToken, addAlert)
  }

  function loginUser(user) {
    loginAction(user, setToken, addAlert)
  }

  function fetchUser() {
    getUserAction(token, setToken, setUser, addAlert)
  }

  function logoutUser() {
    logoutAction(setToken, setUser, addAlert)
  }

  useEffect(
    () => {
      token && fetchUser()
    },
    /*eslint-disable*/ [token]
  )

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        loginUser,
        logoutUser,
        registerUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
