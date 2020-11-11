import axios from "axios"

const getUserAction = (token, setToken, setUser, addAlert) => {
  let config = {
    headers: {
      "auth-token": token,
    },
  }
  if (!token || token == null) return
  axios
    .get("/getuser", config)
    .then((res) => {
      setUser(res.data)
      addAlert("Logged in succesfully!", "success")
      axios.defaults.headers.common["auth-token"] = token
      localStorage.setItem("authtoken", token)
    })
    .catch((err) => {
      setToken(null)
      setUser(null)
      localStorage.removeItem("authtoken")
      addAlert(
        "Problem happened while trying to get user info, please try again!",
        "danger"
      )
    })
}

const logoutAction = (setToken, setUser, addAlert) => {
  async function reset() {
    localStorage.removeItem("authtoken")
    setToken(null)
    setUser(null)
  }

  axios
    .post("/logout")
    .then(() => {
      reset().then(() =>
        addAlert(
          "Logged out successfully, we would like to see you in future :)",
          "success"
        )
      )
    })
    .catch((err) => {
      reset().then(() => addAlert(err.response.data, "danger"))
    })
}

const loginAction = (user, setToken, addAlert) => {
  axios
    .post("/login", user)
    .then((res) => {
      setToken(res.data)
      addAlert("Logged in succesfully, Welcome back!", "success")
    })
    .catch((err) => {
      setToken(null)
      addAlert(err.response.data, "danger")
    })
}

const registerAction = (user, setToken, addAlert) => {
  axios
    .post("/register", user)
    .then((res) => {
      setToken(res.data)
      addAlert("Registered successfully!, Welcome here :)", "success")
    })
    .catch((err) => {
      setToken(null)
      addAlert(err.response.data, "danger")
    })
}

export { registerAction, getUserAction, logoutAction, loginAction }
