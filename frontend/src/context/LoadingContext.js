import React, { createContext, useState } from "react"

export const LoadingContext = createContext()

const LoadingContextProvider = (props) => {
  const [loading, setLoadingState] = useState(false)

  function setLoading(status) {
    setLoadingState(status)
  }

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {props.children}
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider
