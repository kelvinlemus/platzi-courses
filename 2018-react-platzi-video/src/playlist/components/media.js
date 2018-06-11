import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends PureComponent {
  state = {
    author: 'K'
  }
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  // }

  // handleClick = (event) => {
  //   console.log('log', event, this.props)
  //   this.setState({ author: 'Kelvin' })
  // }

  render () {
    return (
      <div className='Media' onClick={this.props.handleClick}>
        <div className='Media-cover'>
          <img
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
            className='Media-image'
            />
          <h3 className='Media-title'>{this.props.title}</h3>
          <p className='Media-author'>{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media
