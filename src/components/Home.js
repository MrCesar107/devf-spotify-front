import React from 'react'

// Router
import { BrowserRouter as Router, Route } from "react-router-dom"

// Components
import Navbar from '../components/Navbar'
import ArtistContainer from '../components/ArtistContainer'
import UserLogin from './UserLogin'
import Logout from '../components/forms/Logout'

// class Home extends React.Component {
//   render() {
//     return(
//       <div>
//         <Navbar />
//         <ArtistContainer/>
//       </div>
//     )
//   }
// }

const Home = (props) => {
  return(
    <div>
      <Navbar />
      <ArtistContainer token={props} />
    </div>
  )
}

export default Home