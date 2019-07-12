import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Styles

import '../styles/common.css'

const ARTIST_BY_ADMIN = gql`
  query {
    getArtists {
      name
      bio
      profile
    }
  }
`

const Back = () => (
  <Query query={ARTIST_BY_ADMIN}>
    {({ loading, error, data }) => {
      if (loading) return "Loading..."
      if (error) return `Error: ${error.message}`

      return (
        <div>
          {data.getArtists.map(artist => (
            <div>
              <h3>{artist.name}</h3>
              <p>{artist.bio}</p>
              <img className="profile" alt="profile"
                   src={artist.profile} />
            </div>
          ))}
        </div>
      )
    }}
  </Query>
)

export default Back
