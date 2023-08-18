import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import { Link } from 'react-router-dom'

const Advertise = () => {
  return (
    <div className='mt-5 lg:mt-36'>
        <Container>
        <Flex className="flex gap-x-6 sm:gap-x-10">
            <div className='w-2/4'>
               <Link to="#">
               <Image imgsrc="assets/ad1.png"/>
               </Link>
            </div>
            <div className='w-2/4 flex flex-col gap-y-3 sm:gap-y-5'>
            <Link to="#">
               <Image imgsrc="assets/ad2.png"/>
               </Link>
               <Link to="#">
               <Image imgsrc="assets/ad3.png"/>
               </Link>
            </div>
        </Flex>
    </Container>
    </div>
  )
}

export default Advertise