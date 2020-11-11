import React from "react"
import { Link } from "react-router-dom"
import GuestLinks from "./GuestLinks"
import UserLinks from "./UserLinks"

const Navbar = () => {
  const logged = false
  return (
    <>
      <nav className="deep-orange">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            Auth
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {logged ? <UserLinks /> : <GuestLinks />}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
