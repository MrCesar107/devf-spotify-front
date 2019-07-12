import React from 'react'

// Styles
import '../styles/App.css';
import '../styles/common.css'

const UserLogin = (props) => {
  return(
    <div className="wrapper">
      <div className="container login-container">
        <h1 className="text-center title">Vanillify</h1>
        <div className="form-container">
          <div className="card">
            <div className="card-body">
              <form className='form'>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" 
                          id="email" aria-describedby="emailHelp"
                          required="true" />
                  <small id="emailHelp" className="form-text text-muted">
                    Nunca compartiremos tus datos con nadie.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password"
                        required="true" 
                        className="form-control" 
                        id="password" />
                </div>
                <div className="form-inline btn-toolbar">
                <div className="btn-group mr-4" role="group">
                  <button type="submit" className="btn btn-primary">
                    Registrarse
                  </button>
                </div>
                <div className="btn-group mr-2" role="group">
                  <button type="submit" className="btn btn-primary">
                    Iniciar sesion
                  </button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin