import React from 'react'
import './search.css'

const Search = (props) => (
  <form
    onSubmit={props.handleSubmit}
    className='Search'>
    <input
      ref={props.setRef}
      type='text'
      className='Search-input'
      placeholder='Busca tu video favorito'
      value={props.value}
      onChange={props.handleChange}
    />
  </form>
)

export default Search
