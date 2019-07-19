import React, { Component } from 'react'

class Song extends Component {
  render() {
    return(
      <div className="song-container">
        <p className="text song-text">{this.props.data.name}</p>
        <button className="btn btn-song ml-auto">
          <i className="far fa-play-circle fa-lg" />
        </button>
      </div>
    )
  }
}

export default Song
