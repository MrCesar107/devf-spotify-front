import React from 'react'
import { Redirect } from 'react-router-dom'

const Logout = (props) => {
  console.log('cerrando sesion')
  localStorage.removeItem('jwt')
  return (<Redirect to='/'/>)
}

export default Logout