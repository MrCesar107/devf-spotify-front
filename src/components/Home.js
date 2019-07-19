import React from 'react'

// Components
import Navbar from '../components/Navbar'
import ArtistContainer from '../components/ArtistContainer'
import AlbumContainer from '../components/AlbumContainer'

const Home = (props) => {
  return(
    <div>
      <Navbar />
      <div className="container">
        <ArtistContainer />
        <AlbumContainer />
      </div>
    </div>
  )
}

export default Home