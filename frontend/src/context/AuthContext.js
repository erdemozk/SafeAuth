import React, { createContext, useState } from "react"

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [user, setUser] = useState()
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
