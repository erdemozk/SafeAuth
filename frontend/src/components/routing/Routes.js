import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Register from "../auth/Register"
import Login from "../auth/Login"
import Dashboard from "../layout/Dashboard"
import Navbar from "../layout/Navbar"

const Routes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default Routes
