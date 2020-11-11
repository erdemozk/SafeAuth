import React, { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"

const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { registerUser } = useContext(AuthContext)

  const registerForm = (e) => {
    e.preventDefault()
    const user = {
      email,
      password,
      fullname: firstName + " " + lastName,
    }
    registerUser(user)
  }

  return (
    <div>
      <br />
      <div className="row">
        <form className="col s12 center" onSubmit={registerForm}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">person</i>
              <input
                id="first_name"
                type="text"
                className="validate"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="last_name"
                type="text"
                className="validate"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                id="email"
                type="email"
                className="validate"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input
                id="password"
                type="password"
                className="validate"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <button className="waves-effect waves-light btn">
            <i className="material-icons right">send</i>Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
