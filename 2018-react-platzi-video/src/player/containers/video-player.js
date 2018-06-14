import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout.js'
import Video from '../components/video.js'
import Title from '../components/title.js'
import PlayPause from '../components/play-pause.js'
import Timer from '../components/timer.js'
import Controls from '../components/video-player-controls.js'

class VideoPlayer extends Component {

  state = {
    pause: true,
    duration: 0,
    currentTime: 0
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

  handleTimeUpdate = (event) => {
    this.setState({
      currentTime: this.video.currentTime
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

        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
        </Controls>
        
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
