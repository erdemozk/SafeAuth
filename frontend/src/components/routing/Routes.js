import React, { useContext } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Register from "../auth/Register"
import Login from "../auth/Login"
import Dashboard from "../layout/Dashboard"
import Navbar from "../layout/Navbar"
import Profile from "../user/Profile"
import AlertHolder from "../utils/AlertHolder"
import { AuthContext } from "../../context/AuthContext"

const Routes = () => {
  const { user } = useContext(AuthContext)
  return (
    <>
      <Router>
        <Navbar user={user} />
        <AlertHolder />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default Routes
