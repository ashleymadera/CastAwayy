import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <div>
      <h1>CastAway</h1>
      {
        props.currentAdmin
          ?
          <>{props.currentAdmin.username}<button onClick={props.handleLogout}>Logout</button></>
          :
          <Link to='/admin/login'>Login/Register</Link>
      }
      <hr />
      {/* {
        props.currentUser && (
          <nav>
            <NavLink to="/foods">Foods</NavLink>
            <NavLink to="/flavors">Flavors</NavLink>
          </nav>
        )
      } */}
    </div>
  )
}
