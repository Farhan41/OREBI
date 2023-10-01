import React from 'react'
import Breadcrumb from '../components/layout/Breadcrumb'
import Container from '../components/layout/Container'
import Flex from '../components/layout/Flex'
import Pagination from '../components/layout/Pagination'
import { useState } from 'react'
import LeftSIdeBar from '../components/layout/LeftSideBar'

const Shop = () => {

  let [showNumber, setShowNumber] = useState(12)

  let handlePaginationChange =  (e) => {
    setShowNumber(+e.target.value)
  }



  return   (

   <Container>
    <Breadcrumb/>
     <Flex className="flex gap-x-10">


      <div className='w-[25%]'>
        <LeftSIdeBar/>
      </div>



      <div className='w-[75%] relative'>
        
     <div className='flex gap-x-10 mb-3.5'>
     <div className='md:flex items-center gap-x-2'>
      <span className='inline-block font-dm font-regular font-base text-[#767676]'>Sort by:</span>
     <select id="countries" class="md:w-[239px]  bg-gray-50 border border-[#F0F0F0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-dm font-regular font-base">
      <option selected className='font-dm font-regular font-base text-[#767676]'>Featured</option>
      <option value="US" className='font-dm font-regular font-base text-[#767676]'>United States</option>
      <option value="CA" className='font-dm font-regular font-base text-[#767676]'>Canada</option>
      <option value="FR" className='font-dm font-regular font-base text-[#767676]'>France</option>
      <option value="DE" className='font-dm font-regular font-base text-[#767676]'>Germany</option>
      </select>
     </div>

     <div className='md:flex items-center gap-x-2'>
      <span className='inline-block font-dm font-regular font-base text-[#767676]'>Show:</span>
     <select onClick={handlePaginationChange} id="countries" class="md:w-[239px]  bg-gray-50 border border-[#F0F0F0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-dm font-regular font-base">
      <option value="12" className='font-dm font-regular font-base text-[#767676]'>12</option>
      <option value="24" className='font-dm font-regular font-base text-[#767676]'>24</option>
      <option value="48" className='font-dm font-regular font-base text-[#767676]'>48</option>
      </select>
     </div>
     </div>

      <Pagination itemsPerPage={showNumber} />
     
      </div>
     </Flex>
   </Container>
   
  )
}

export default Shop