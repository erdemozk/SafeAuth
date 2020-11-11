import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Dashboard = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      {user ? (
        <div className="card deep-orange hoverable">
          <br />
          <h3 className="center white-text">Your Profile</h3>
          <div className="card-content white-text">
            <span className="card-title">{user.fullname}</span>
            <p>{user.email}</p>
          </div>
          <br />
        </div>
      ) : (
        <div>
          <div className="card deep-orange hoverable">
            <br />
            <div className="card-content white-text">
              <span className="card-title">
                If you log in, you will see your profile here!
              </span>
            </div>
            <br />
          </div>
        </div>
      )}
    </>
  )
}

export default Dashboard
