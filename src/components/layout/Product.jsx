import React from 'react'
import Image from "./Image"
import Badge from './Badge'
import Flex from './Flex'
import {AiFillHeart} from "react-icons/ai"
import {RxReload}  from "react-icons/rx"
import {HiShoppingCart} from "react-icons/hi"


const Product = ({src, badge}) => {
  return (
   <div>
    <div className='relative group overflow-hidden'>
    <Image imgsrc={src}/>
    {badge && 
    <Badge title="New"/>
    }
  <div className='absolute group-hover:bottom-0 bottom-[-44%] lg:max-xl:bottom-[-75%] left-0 h-40 w-full bg-white py-6 px-7 duration-300 ease-in-out'>
      <Flex className="flex items-center justify-end gap-x-1">
        <p className='font-regular font-dm  text-[#6d6d6d] text-base lg:max-xl:text-sm'>Add to Wish List </p>
        <AiFillHeart className='text-base'/>
      </Flex>
      <Flex className="my-5 flex items-center justify-end gap-x-1">
        <p className='font-regular font-dm  text-[#6d6d6d] text-base lg:max-xl:text-sm'>Compare</p>
        <RxReload className='text-base'/>
      </Flex>
      <Flex className="flex items-center justify-end gap-x-1">
        <p className='font-regular font-dm  text-[#6d6d6d] text-base lg:max-xl:text-sm'>Add to Cart </p>
        <HiShoppingCart className='text-base'/>
      </Flex>
    </div>
   </div>
   <div className='mb-12 md:mb-0'>
    <Flex className='flex justify-between items-center mt-0 md:mt-6'>
    <h3 className='font-dm font-bold text-xl lg:max-xl:text-sm'>Basic Crew Neck Tee</h3>
    <p className='text-base text-[#767676] font-dm font-normal lg:max-xl:text-sm'>$44.00</p>
    </Flex>
    <p className='mt-1 md:mt-4 text-[#767676] font-dm font-normal text-base lg:max-xl:text-sm'>Black</p>
   </div>
   </div>
  )
}

export default Product