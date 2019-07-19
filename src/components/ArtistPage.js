import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Components
import ArtistAlbumsContainer from './ArtistAlbumsContainer'
import Navbar from './Navbar'

const ARTIST = gql`
  query getArtistById($artist: String!) {
    getArtistById(artist: $artist) {
      name
      bio
      profile
    }
  }
`

const ArtistPage = ({match, location}) => {
  const { params: { id } } = match
  return(
    <Query query={ARTIST} variables={{ artist: id }}>
      {({loading, error, data}) => {
        if (loading) return 'Loading...'
        if (error) return 'Error'

        return(
          <div>
            <Navbar />
            <div className="container page-container">
              <h1 className="artist-title">{data.getArtistById.name}</h1>
              <p className='text'>{data.getArtistById.bio}</p>
              <ArtistAlbumsContainer artist={id} />
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default ArtistPage
