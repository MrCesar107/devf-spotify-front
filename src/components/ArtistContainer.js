import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Components
import Artist from './Artist'

const ARTISTS = gql`
  query {
    getArtists {
      id
      name
      bio
      profile
    }
  }
`

const ArtistContainer = (props) => {
  return(
    <Query query={ARTISTS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error: ${error}`

        return(
          <div className="artist-container">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="subtitle">Artistas</h3>
              </div>
            </div>
            <div className="row">
              {data.getArtists.map(artist => (
                <Artist data={artist} />
              ))}
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default ArtistContainer
