import React from 'react'
import Heading from './Heading.jsx'
import Container from './Container.jsx'
import Flex from './Flex.jsx'
import Product from './Product.jsx'


const Specialoffer = () => {


  return (

    <div className='mt-5 md:mt-32'>
        <Container>
        <Heading title="Special Offers"/>
        
        <Flex className="sm:max-lg:flex-wrap sm:flex sm:max-md:justify-between md:gap-x-10">

        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px]  lg:max-w-[370px]'>
        <Product src="assets/p1.png" badge={false}/>
        </div>

        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px]  lg:max-w-[370px]'>
        <Product src="assets/p1.png" badge={true}/>
        </div>

        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px]  lg:max-w-[370px]'>
        <Product src="assets/p1.png" badge={false}/>
        </div>

        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px]  lg:max-w-[370px]'>
        <Product src="assets/p1.png" badge={true}/>
        </div>
        </Flex> 
       
        </Container>
    </div>
  )
}

export default Specialoffer