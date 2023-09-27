import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import { useState } from 'react'


const LeftSidebarItem = (props) => {

    let [drop, setDrop] = useState(props.subdropdown)
    let [show, setShow] = useState(false)

    let [showMinus, setShowMinus] = useState(false)

    let handleShow = () => {
        if(!show){
            setShow(true) 
        }else{
            setShow(false)  
        }

        if(!showMinus){
          setShowMinus(true) 
        }else{
          setShowMinus(false)  
        }
        
    }

  return (

    <div>

        {drop?(
          <div onClick={handleShow} className="flex items-center justify-between cursor-pointer border-b border-solid border-[#767676] py-5">
          <h3 className='cursor-pointer font-dm text-base font-regular text-[#767676]'>
          {
            props.color &&

            (
              <span className={`inline-block w-[11px] h-[11px] rounded-full mr-2`} style={{background: props.color}}></span>
            )

          }
          
          {props.title}
          </h3>


          {
            showMinus
            ?
            <AiOutlineMinus className='text-[#767676]'/>
            :
            <AiOutlinePlus className='text-[#767676]'/>
          }

         


          </div>  
    
        ):
        (
            <h3 className='cursor-pointer font-dm text-base font-regular text-[#767676] border-b border-solid border-[#767676] py-5'>  {props.color} {props.title}</h3>  
        )
        }

           {
             show &&
             <div>
              {props.children}
             </div>
           }

    </div>
  )
}

export default LeftSidebarItem