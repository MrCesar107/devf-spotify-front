import React from 'react'

// Styles
import '../styles/App.css'
import '../styles/common.css'

// Components
import Signup from './forms/Signup'

const userSignup = (props) => (
  <div className="wrapper-signup">
    <div className="container signup-container">
      <h1 className="text-center title">Vanillify</h1>
      <h2 className="text-center sub-title">Registro</h2>
      <div className="form-container">
        <div className="card">
          <div className="card-body">
            <Signup props={props} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default userSignup