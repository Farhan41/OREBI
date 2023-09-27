import React from 'react'
import SidebarContent from './SidebarContent'
import { category, colors, brands, prices} from '../../data/data'

const LeftSIdeBar = () => {
  return (
    <>
    <SidebarContent dropDown={true} droptitle="Show by Category" data={category}/>
    {/* <SidebarContent dropDown={true} droptitle="Show by Color" data={colors}/>
    <SidebarContent dropDown={true} droptitle="Show by Brand" data={brands}/>
    <SidebarContent dropDown={true} droptitle="Show by Price" data={prices}/> */}
    </>
  )
}

export default LeftSIdeBar