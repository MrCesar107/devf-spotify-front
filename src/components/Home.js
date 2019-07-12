import React from 'react'

// Router
import { BrowserRouter as Router, Route } from "react-router-dom"

// Components
import Navbar from '../components/Navbar'
import Back from '../components/Back'

class Home extends React.Component {
  render() {
    return(
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
      </Router>
    )
  }
}

export default Home