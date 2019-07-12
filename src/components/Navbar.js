import React from 'react'

// Link of routet
import { Link } from "react-router-dom"

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand mx-auto" href="#">Vanillify</a>
      <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <img
            className="profile"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt = "user-profile" />
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <button className="btn btn-primary">
                Cerrar sesion
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Navbar