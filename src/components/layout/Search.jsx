import React from 'react'

const Search = ({className, placeholder}) => {
  return (
    <input className={className} placeholder={placeholder} type="text" />
  )
}

export default Search