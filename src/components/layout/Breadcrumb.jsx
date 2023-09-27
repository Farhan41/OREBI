import React from 'react'
import {LiaAngleRightSolid} from "react-icons/lia"
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <div className='my-20'>
    <h1 className='font-dm text-5xl font-bold mb-2.5'>
      {window.location.pathname.split("/")[1].charAt(0).toUpperCase() + window.location.pathname.split("/")[1].slice(1) }
      </h1>
    <p className=' flex  items-center gap-x-2 font-regular font-dm text-xs text-[#767676] '><Link to="/">Home </Link><LiaAngleRightSolid/>{window.location.pathname.split("/")[1]}</p>
    </div>
  )
}

export default Breadcrumb

//.charAt(0).toUpperCase()