import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return(
    <Route 
      {...rest}
      render={props => {
        if (props.location.state !== undefined && props.location.state.isLogged)
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