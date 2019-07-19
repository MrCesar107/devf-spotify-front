import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Components
import Song from './Song'

const ALBUM_SONGS = gql`
  query GetSongsByAlbum($album: String!) {
    getSongsByAlbum(album: $album) {
      name
      source
    }
  }
`

const SongsAlbumContainer = (props) => {
  const { album } = props
  return(
    <Query query={ALBUM_SONGS} variables={{ album: album }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return 'Error'

        return (
          <div className="songs-album-container">
            {data.getSongsByAlbum.map(song => (
              <Song data={song} />
            ))}
          </div>
        )
      }}
    </Query>
  )
}

export default SongsAlbumContainer
