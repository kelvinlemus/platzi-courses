import React from 'react'
import { render } from 'react-dom'
// import Playlist from './src/playlist/components/playlist'
import data from '../api.json'
import Home from '../pages/containers/home'

const app = document.getElementById('home-container')

render(<Home data={data} />, app)
