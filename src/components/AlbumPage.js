import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Components
import SongsAlbumContainer from './SongsAlbumContainer'
import Navbar from './Navbar'
import Player from './Player'

const ALBUM = gql`
  query getAlbumById($album: String!) {
    getAlbumById(album: $album) {
      name
      year
    }
  }
`

const ALBUM_SONGS = gql`
  query GetSongsByAlbum($album: String!) {
    getSongsByAlbum(album: $album) {
      name
      source
    }
  }
`

const AlbumPage = ({match, location}) => {
  const { params: { id } } = match

  return(
    <Query query={ALBUM} variables={{ album: id }}>
      {({loading, error, data}) => {
        if (loading) return 'Loading...'
        if (error) return 'Error'
        return(
          <div>
            <Navbar />
            <div className="container page-container">
              <h1 className="artist-title">{data.getAlbumById.name}</h1>
              <p className='text'>{data.getAlbumById.year}</p>
              <SongsAlbumContainer album={id} />
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default AlbumPage
