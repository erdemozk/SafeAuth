import axios from "axios"

const getUserAction = (token, setToken, setUser, addAlert, setLoading) => {
  setLoading(true)
  let config = {
    headers: {
      "auth-token": token,
    },
  }

  if (!token || token == null) {
    setLoading(false)
    return
  }
  axios
    .get("/getuser", config)
    .then((res) => {
      setUser(res.data)
      addAlert("Logged in succesfully!", "success")
      axios.defaults.headers.common["auth-token"] = token
      localStorage.setItem("authtoken", token)
      setLoading(false)
    })
    .catch(() => {
      setToken(null)
      setUser(null)
      localStorage.removeItem("authtoken")
      addAlert(
        "Problem happened while trying to get user info, please try again!",
        "danger"
      )
      setLoading(false)
    })
}

const logoutAction = (setToken, setUser, addAlert, setLoading) => {
  setLoading(true)
  async function reset() {
    localStorage.removeItem("authtoken")
    setToken(null)
    setUser(null)
    setLoading(false)
  }

  axios
    .post("/logout")
    .then(() => {
      reset().then(() => {
        addAlert(
          "Logged out successfully, we would like to see you in future :)",
          "success"
        )
      })
    })
    .catch((err) => {
      reset().then(() => {
        addAlert(err.response.data, "danger")
      })
    })
}

const loginAction = (user, setToken, addAlert, setLoading) => {
  setLoading(true)
  axios
    .post("/login", user)
    .then((res) => {
      setToken(res.data)
      addAlert("Logged in succesfully, Welcome back!", "success")
      setLoading(false)
    })
    .catch((err) => {
      setToken(null)
      addAlert(err.response.data, "danger")
      setLoading(false)
    })
}

const registerAction = (user, setToken, addAlert, setLoading) => {
  setLoading(true)
  axios
    .post("/register", user)
    .then((res) => {
      setToken(res.data)
      addAlert("Registered successfully!, Welcome here :)", "success")
      setLoading(false)
    })
    .catch((err) => {
      setToken(null)
      addAlert(err.response.data, "danger")
      setLoading(false)
    })
}

export { registerAction, getUserAction, logoutAction, loginAction }
