import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout.js'
import Video from '../components/video.js'
import Title from '../components/title.js'
import PlayPause from '../components/play-pause.js'
import Timer from '../components/timer.js'

class VideoPlayer extends Component {

  state = {
    pause: true,
    duration: 0
  }

  togglePlay = () => {
    this.setState({
      pause: !this.state.pause
    })
  }

  handleLoadedMetadata = (event) => {
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }

  componentDidMount () {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  render () {
    return (
      <VideoPlayerLayout>
        <Title title={"asdasdadsad"} />
        <PlayPause
          pause={this.state.pause}
          handleClick={this.togglePlay}
        />
        <Timer
          duration={this.state.duration}
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
