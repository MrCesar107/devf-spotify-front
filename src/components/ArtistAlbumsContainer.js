import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Components
import Album from './Album'

const ARTIST_ALBUMS = gql`
  query GetAlbumsByArtist($artist: String!) {
    getAlbumsByArtist(artist: $artist) {
      id
      name
      year
      coverPage
    }
  }`

const ArtistAlbumsContainer = (props) => {
  const { artist } = props
  return(
    <Query query={ARTIST_ALBUMS} variables={{ artist: artist }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return 'Error'
        
        return(
          <div>
            <div className="row">
              <div className="col-sm-12">
                <h3 className="subtitle">Albums</h3>
              </div>
            </div>
            <div className="row">
              {data.getAlbumsByArtist.map(album => (
                  <Album data={album} />
              ))}
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default ArtistAlbumsContainer
