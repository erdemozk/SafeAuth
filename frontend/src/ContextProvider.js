import React from "react"
import AlertContextProvider from "./context/AlertContext"
import AuthContextProvider from "./context/AuthContext"

const ContextProvider = ({ children }) => {
  return (
    <>
      <AlertContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </AlertContextProvider>
    </>
  )
}

export default ContextProvider
