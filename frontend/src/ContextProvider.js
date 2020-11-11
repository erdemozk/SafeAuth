import React from "react"
import AlertContextProvider from "./context/AlertContext"

const ContextProvider = ({ children }) => {
  return (
    <>
      <AlertContextProvider>{children}</AlertContextProvider>
    </>
  )
}

export default ContextProvider
