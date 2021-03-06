import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Components
import Album from './Album'

const ALBUMS = gql`
  query {
    getAlbums {
      id
      name
      year
      coverPage
    }
  }
`

const AlbumContainer = (props) => {
  return(
    <Query query={ALBUMS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error`

        return(
          <div className="artist-container">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="subtitle">Albumes</h3>
              </div>
            </div>
            <div className="row">
              {data.getAlbums.map(album => (
                  <Album data={album} />
              ))}
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default AlbumContainer
