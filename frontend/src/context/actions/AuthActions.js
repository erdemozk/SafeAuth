import axios from "axios"

const registerAction = (user, setToken, addAlert, alerts) => {
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

export { registerAction }
