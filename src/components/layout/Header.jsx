import React, { useEffect } from 'react'
import Container from './Container'
import Flex from './Flex'
import Dropdown from './Dropdown'
import {FaBars, FaSearch, FaUserAlt} from "react-icons/fa"
import List from './List'
import ListItem from './ListItem'
import { useState } from 'react'
import { useRef } from 'react'
import Search from './Search'
import {GoTriangleDown} from "react-icons/go"
import {HiShoppingCart} from "react-icons/hi"
import Image from './Image'
import {ImCross} from "react-icons/im"
import { Link } from 'react-router-dom'


const Header = () => {

  let [ categoryDropdown, setCategoryDropdown ] = useState(false)
  let [ userDropdown, setUserDropdown ] = useState(false)
  let [ cartDropdown, setCartDropdown ] = useState(false)

  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  useEffect(()=>{
    document.body.addEventListener("click", (e)=>{
     
      if(categoryRef.current.contains(e.target)){
        setCategoryDropdown(true)
      }else{
        setCategoryDropdown(false)
      }

      if(userRef.current.contains(e.target)){
        setUserDropdown(true)
      }else{
        setUserDropdown(false)
      }

      if(cartRef.current.contains(e.target)){
        setCartDropdown(true)
      }else{
        setCartDropdown(false)
      }


    })
  })

  



  return (
    <div className='py-6 bg-[#F5F5F3] '>
      <Container>
        <Flex className="flex justify-between">
          <div className='flex items-center'>
            <Dropdown className= "relative z-50" dropref={categoryRef}>
            <p className='flex items-center gap-x-2.5 font-dm text-sm font-regular'>
              <FaBars/><span className='hidden lg:inline-block'>Shop by Category</span></p>
            
            {
              categoryDropdown
               &&
              <List className="absolute top-8 w-[263px] bg-primary text-[#767676] font-dm text-sm font-regular ">
              <ListItem className="py-4 px-5 hover:px-7 border transition duration-150 ease-in-out border-b border-solid border-[#2D2D2D] hover:text-white hover: font-bold" itemname="Accesories"/>
              <ListItem className="py-4 px-5 hover:px-7 border transition duration-150 ease-in-out border-b border-solid border-[#2D2D2D] hover:text-white hover: font-bold" itemname="Furniture"/>
              <ListItem className="py-4 px-5 hover:px-7 border transition duration-150 ease-in-out border-b border-solid border-[#2D2D2D] hover:text-white hover: font-bold" itemname="Electronics"/>
              <ListItem className="py-4 px-5 hover:px-7 border transition duration-150 ease-in-out border-b border-solid border-[#2D2D2D] hover:text-white hover: font-bold" itemname="Clothes"/>
              <ListItem className="py-4 px-5 hover:px-7 border transition duration-150 ease-in-out border-b border-solid border-[#2D2D2D] hover:text-white hover: font-bold" itemname="Bags"/>
              <ListItem className="py-4 px-5 hover:px-7 border transition duration-150 ease-in-out border-b border-solid border-[#2D2D2D] hover:text-white hover: font-bold" itemname="Home appliance"/>
            </List>
            } 
            </Dropdown>  
          </div>
          <div className='w-auto lg:w-[600px] relative'>
            <Search className="w-full py-4 px-5 placeholder:text-[#c4c4c4] font-dm text-sm font-regular" placeholder="Search Products"/>
            <FaSearch className='absolute top-4 right-4'/>
          </div>
          <div className='flex items-center'>
            <Flex className="flex gap-x-10">
              <Dropdown className= "relative z-50" dropref={userRef}>
              <div className='flex'>
                <FaUserAlt/>
                <GoTriangleDown/>
              </div>
              {
              userDropdown &&
              <List className="absolute top-8 right-0 border-solid border-[#F0F0F0] w-[200px] bg-white text-primary font-dm text-sm text-center font-regular ">
              <ListItem className="py-4 px-5 transition duration-150 ease-in-out border-b border-solid border-[#F0F0F0] hover:text-white hover:bg-primary hover: font-bold" itemname="My Account"/>
              <ListItem className="py-4 px-5 transition duration-150 ease-in-out border-b border-solid border-[#F0F0F0] hover:text-white hover:bg-primary hover: font-bold" itemname="Log Out"/>
            </List>
            } 
              </Dropdown>
             
              <div>
              <Dropdown className= "relative z-50" dropref={cartRef}>
              <HiShoppingCart className='text-xl'/>
              {
              cartDropdown &&(
                <div className='absolute top-8 right-0 w-[360px] border border-solid border-[#F0F0F0]'>
                <div className=' bg-[#F5F5F5] p-5'>
                  <Flex className="flex justify-between">
                   <div>
                     <Image imgsrc="assets/cartimg.png" />
                   </div>
                   <div className='flex flex-col justify-center'>
                     <h3 className='font-dm font-bold text-sm text-primary'>Black Smart Watch</h3>
                      <p className=' mt-3 font-dm font-bold text-sm text-primary'>$44</p>
                   </div>
                   <div className='flex items-center'>
                     <ImCross className='text-sm'/>
                   </div>
                  </Flex>
               </div>
                 <div className='bg-white p-5'>
                   <h4 className='font-dm font-normal text-base text-[#767676]'>
                     Subtotal: <span className='font-bold text-primary'>$44.00</span>
                   </h4>
                  
                  <Link className="mt-3 inline-block border border-solid border-primary py-4 px-10 font-dm text-sm font-bold ">
                    View Cart
                   </Link>
                   <Link className="mt-3 inline-block border border-solid border-primary py-4 px-10 font-dm text-sm font-bold bg-primary text-white  ml-3 ">
                    Check Out
                   </Link>
                  
                 </div>
              </div>
              )} 
              </Dropdown> 

              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Header