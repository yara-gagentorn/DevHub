import React from 'react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Todos from '../subcomponents/Todos/Todos'

function Nav() {
  const user = useSelector((state) => state.user)

  const { logout, loginWithRedirect } = useAuth0()
  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-1 bg-vslightblack rounded ">
        <div className="grid grid-cols-1 grid-rows-3">
          <span className="m-auto">Wed</span>
          <span className="m-auto">7</span>
          <span className="m-auto">September</span>
        </div>
        <nav>
          <Link to="/">Home</Link>

          <IfAuthenticated>
            <Link to="/" onClick={handleLogoff}>
              Log off
            </Link>
            <p>
              <span role="img" alt={user?.icon}>
                {user?.icon}
              </span>
              {' ' + user.username}
            </p>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <Link to="/" onClick={handleSignIn}>
              Sign In
            </Link>
          </IfNotAuthenticated>
        </nav>
      </div>
    </>
  )
}

export default Nav
