import React, { Component } from 'react'
import './video.css'

class Video extends Component {
  togglePlay () {
    if (this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }

  setRef = element => {
    this.video = element
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.pause != this.props.pause) {
      this.togglePlay()
    }
  }

  render () {
    const {
      handleLoadedMetadata,
      handleTimeUpdate
    } = this.props

    return (
      <div className="Video">
        <video
          ref={this.setRef}
          src={this.props.src}
          autoPlay={this.props.autoplay}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
        />
      </div>
    )
  }
}

export default Video
