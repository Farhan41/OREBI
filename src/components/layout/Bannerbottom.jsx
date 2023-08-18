import React from 'react'
import {PiNumberTwoBold} from "react-icons/pi"
import {TbTruckDelivery} from "react-icons/tb"
import {RxReload}  from "react-icons/rx"
import Container from './Container'
import Flex from './Flex'

const Bannerbottom = () => {
  return (
    <div className='border border-solid border-[#f0f0f0] p-2 sm:p-7 mt-[-6px]'>
        <Container>
            <Flex className="flex justify-between">
                <Flex className="flex items-center gap-x-2 sm:gap-x-4">
                    <PiNumberTwoBold className='text-[10px] sm:text-2xl'/>
                    <p className='font-regular font-dm text-[10px] sm:text-base text-[#6d6d6d]'>Two years warranty</p>
                </Flex> 
                <Flex className="flex items-center gap-r gap-x-1 sm:gap-x-4">
                    <TbTruckDelivery className='text-[10px] sm:text-2xl'/>
                    <p className='font-regular font-dm text-[10px] sm:text-base text-[#6d6d6d]'>Free shipping</p>
                </Flex>
                <Flex className="flex items-center gap-r gap-x-1 sm:gap-x-4">
                    <RxReload className='text-[10px] sm:text-2xl'/>
                    <p className='font-regular font-dm text-[10px] sm:text-base text-[#6d6d6d]'>Return policy in 30 days</p>
                </Flex>
            </Flex>
        </Container>
    </div>
  )
}

export default Bannerbottom