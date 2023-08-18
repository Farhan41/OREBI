import React from 'react'

import Image from "./Image"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"
import {FaBars} from "react-icons/fa"
import { useEffect, useState } from "react"
import Container from './Container'

const Navbar = () => {

    let [show, setShow] = useState(true)

  useEffect(()=>{
    function scrollWidth(e){
      if (window.innerWidth < 1024){
        setShow(false)
      }else{
        setShow(true)
      }
    }

    scrollWidth()
    window.addEventListener("resize", scrollWidth)
  }, [])


  let handleShow = () =>{

    if(show){
      setShow(false)
    }else{
      setShow(true)
    }

  }
  return (
    <>
    
    <nav className='py-8'>
        <Container>
          <Flex className="lg:flex">
          <div className="lg:w-3/12">
            <Image imgsrc="assets/logo.png"/>
          </div>
          
         <div className="lg:w-9/12">
         <FaBars onClick={handleShow} className=" block lg:hidden ml-auto absolute top-10 right-3"/>
        {show && (
           <List className="lg:flex lg:justify-end lg:gap-x-10 font-dm text-sm mt-3 lg:mt-0 ">
           <ListItem className="font-bold my-3 lg:my-0" itemname="Home"/>
           <ListItem className="font-regular hover:font-bold my-3 lg:my-0" itemname="About"/>
           <ListItem className="font-regular hover:font-bold my-3 lg:my-0" itemname="Service"/>
           <ListItem className="font-regular hover:font-bold my-3 lg:my-0" itemname="Contact"/>
         </List>
        )}
         </div>
          </Flex>
        </Container>
      </nav>
    </>
  )
}

export default Navbar