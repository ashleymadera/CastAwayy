import React from 'react'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div>
      <header className='header'>
        <h1 className="castaway">CASTAWAY</h1>
        <img src="https://i.imgur.com/rEhMYM3.png" alt="Castway Yarn logo" />
        <Link to='/projects'><img src="https://i.imgur.com/MkNXAki.png" alt="Heart icon"
          className="heart"
          height="30px"
          width="30px"
        /></Link>
      </header>

      <nav className='nav'>
        <Link to='/'>HOME</Link>
        <p>SEARCH</p>
        {
          props.currentAdmin
            ?
            <>
              <div>{props.currentAdmin.username}
                <button onClick={props.handleLogout}>LOGOUT</button>
              </div>

            </>
            :
            <Link to='/admin/login'>Login</Link>
        }
      </nav>

    </div>
  )
}
