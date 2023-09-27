import React from 'react'
import Breadcrumb from '../components/layout/Breadcrumb'
import Container from '../components/layout/Container'
import Flex from '../components/layout/Flex'
import Image from '../components/layout/Image'
import { Link } from 'react-router-dom'



const About = () => {
  return (
    <Container>
        <Breadcrumb/>
        <Flex className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-10">
            <div className='w-full lg:w-2/4'>
                <Link to="#">
                <Image imgsrc="assets/aboutOne.png" />
                </Link>
            </div>
            <div className='w-full lg:w-2/4'>
                <Link to="#">
                <Image imgsrc="assets/aboutTwo.png" />
                </Link>
            </div>
        </Flex>
        <div className="mt-32 mb-28">
            <h4 className='font-dm font-normal text-[20px] md:text-[39px]'>
            Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style. 
            </h4>
        </div>

        <Flex className="flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 justify-between">
            <div className='w-full lg:w-[32%]'>
                <h4 className='font-dm font-bold text-2xl mb-3'>Our Vision</h4>
                <p className='font-dm font-regular text-base text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='w-full lg:w-[32%]'>
                <h4  className='font-dm font-bold text-2xl mb-3'>Our Story</h4>
                <p className='font-dm font-regular text-base text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>
            <div className='w-full lg:w-[32%]'>
                <h4  className='font-dm font-bold text-2xl mb-3'>Our Brands</h4>
                <p className='font-dm font-regular text-base text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
        </Flex>

    </Container>
  )
}

export default About