import React from 'react'
import {GoTriangleDown} from "react-icons/go"
import { useState } from 'react'
import LeftSidebarItem from './LeftSidebarItem'
import { category } from '../../data/data'


const SidebarContent = ({dropDown, droptitle, data, subcategory}) => {


    let [drop, setDrop] = useState(dropDown)
    let [show, setShow] = useState(dropDown)

    let handleShow = () => {
        if(!show){
            setShow(true) 
        }else{
            setShow(false)  
        }
    }

  return (
    <div className='mb-14'>

        {drop?(
          <div onClick={handleShow} className="flex items-center justify-between cursor-pointer mb-9">
          <h3 className='cursor-pointer font-dm text-xl font-bold'>{droptitle}</h3>
          <GoTriangleDown/>
          </div>  
        ):
        (
            <h3 className='cursor-pointer font-dm text-xl font-bold mb-9'>{droptitle}</h3>  
        )
        }

        {
            show &&
         
            <>

            {data.map((item)=>(

            <LeftSidebarItem subdropdown={true} title={item.cname}>

                {item.subcategory.map((sitem)=>(
                    <h1 className='cursor-pointer font-dm text-base font-regular text-[#767676] border-b border-solid border-[#767676] py-5'>{sitem.name}</h1>
                ))}
            
            </LeftSidebarItem>

            ))}

            </>
        
            
        }

        {
            !drop &&
            <>

            {data.map((item)=>(

            <LeftSidebarItem subdropdown={true} title={item.cname}>
                
                {item.subcategory.map((sitem)=>(
                    <h1 className='cursor-pointer font-dm text-base font-regular text-[#767676] border-b border-solid border-[#767676] py-5'>{sitem.name}</h1>
                ))}

            </LeftSidebarItem>

            ))}

            
            </>
        }

        
    </div>
  )
}

export default SidebarContent