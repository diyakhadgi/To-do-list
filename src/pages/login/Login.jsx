import React from 'react'
import NavBar from '../NavBar'
import { Link, Route } from 'react-router-dom/cjs/react-router-dom.min'

export default function Login() {
  return (
    <>
      <NavBar />
      <div className="todo_container">
        <button onClick={() => {
          localStorage.setItem("loggedIn", true)
        }}>Login</button> <br />

        <Link to = "/login/showInfo">Show information</Link> <br />
        <Route path="/login/showInfo">
          <div>
            This is dummy login and doesnt communicate with server
        </div>
        </Route>
        </div>
    </>
  )
}
