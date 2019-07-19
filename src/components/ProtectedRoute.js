import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return(
    <Route 
      {...rest}
      render={props => {
        console.log(localStorage.getItem('jwt'))
        if (localStorage.getItem('jwt') !== null &&
            localStorage.getItem('jwt') !== undefined &&
            localStorage.getItem('jwt') !== '')
          return <Component {...props} />
        else
          return <Redirect to={
            {
              pathname: "/",
              state: {
                from: props.location
              }
            }
          } />
      }}/>
  )
}

export default ProtectedRoute