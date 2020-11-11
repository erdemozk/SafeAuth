import React, { createContext, useState } from "react"

export const LoadingContext = createContext()

const LoadingContextProvider = (props) => {
  const [loading, setLoading] = useState(false)
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {props.children}
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider
