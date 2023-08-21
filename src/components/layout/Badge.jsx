import React from 'react'

const Badge = ({title}) => {
  return (
    <span className="absolute top-5 left-5 bg-primary text-white py-2 px-8" >{title}</span>
  )
}

export default Badge