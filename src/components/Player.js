import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Player extends Component {
  state = {
    url: 'http://res.cloudinary.com/dnwmckxn4/video/upload/v1563327060/aazgnrw9ylbiphbqfw7z.mp3',
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: false,
    loaded: false,
    duration: 0,
    playbackRate: 1.0,
    loop: false 
  }

  load = url=> {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }

  playPause = () => {
    this.setState({ playing: !this.state.playing })
    console.log(this.state.playing)
  }

  stop = () => {
    this.setState({ url: null, playing: false })
  }

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }

  togglePIP = () => {
    this.setState({ pip: !this.state.pip })
  }

  onPlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }

  onEnablePIP = () => {
    console.log('onEnablePIP')
    this.setState({ pip: true })
  }

  onDisablePIP = () => {
    console.log('onDisablePIP')
    this.setState({ pip: false })
  }

  onPause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }

  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  onProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  onEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }

  onDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }

  ref = player => {
    this.player = player
  }

  render() {
    const {
      url,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
      pip
    } = this.state

    return (
      <div>
        <ReactPlayer
          ref={this.ref}
          className="react-player"
          width="0px"
          height="0px"
          url={url}
          pip={pip}
          playing={playing}
          controls={controls}
          light={light}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          onPlay={this.onPlay}
          onEnablePIP={this.onEnablePIP}
          onDisablePIP={this.onDisablePIP}
          onPause={this.onPause}
          onEnded={this.onEnded}
          onError={e => console.log('onError', e)}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
        />
        <div className="song-duration" style={{width: `${this.state.played * 100}%`}} />
        <div className="player-container mx-auto">
          <div className="player-controls">
            <button className="player-control">
              <i className="fas fa-fast-backward" />
            </button>
            <button className="player-control"
              onClick={this.playPause}>
              {playing ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
            </button>
            <button className="player-control">
              <i className="fas fa-fast-forward" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Player
