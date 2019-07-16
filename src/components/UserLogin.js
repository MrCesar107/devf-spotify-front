import React from 'react'

// Styles
import '../styles/App.css';
import '../styles/common.css'

// Components
import Login from './forms/Login';

const UserLogin = (props) => {
  return(
    <div className="wrapper">
      <div className="container login-container">
        <h1 className="text-center title">Vanillify</h1>
        <h2 className="text-center sub-title">Iniciar Sesión</h2>
        <div className="form-container">
          <div className="card">
            <div className="card-body">
              <Login props={props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin