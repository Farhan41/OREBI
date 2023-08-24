import React from 'react'
import Heading from './Heading.jsx'
import Container from './Container.jsx'
import Product from './Product.jsx'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SampleNextArrow from './SampleNextArrow.jsx'
import SamplePrevArrow from './SamplePrevArrow.jsx';

const Newarrival = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className='mt-5 md:mt-32'>
        <Container>
        <Heading title="New Arrival"/>

        <Slider {...settings}>
        
        {/* <Flex className="sm:max-lg:flex-wrap sm:flex sm:max-md:justify-between md:gap-x-10"> */}

        <div className='sm:max-w-[300px] md:max-lg:max-w-[235px]  lg:max-w-[265px]'>
        <Product src="assets/clock.png" badge={false}/>
        </div>

        <div className='sm:max-w-[300px] md:max-lg:max-w-[235px]  lg:max-w-[265px]'>
        <Product src="assets/clock.png" badge={true}/>
        </div>

        <div className='sm:max-w-[300px] md:max-lg:max-w-[235px]  lg:max-w-[265px]'>
        <Product src="assets/clock.png" badge={false}/>
        </div>

        <div className='sm:max-w-[300px] md:max-lg:max-w-[235px]  lg:max-w-[265px]'>
        <Product src="assets/clock.png" badge={true}/>
        </div>

        <div className='sm:max-w-[300px] md:max-lg:max-w-[235px]  lg:max-w-[265px]'>
        <Product src="assets/clock.png" badge={true}/>
        </div>
        {/* </Flex>  */}
        </Slider>
        </Container>
    </div>
  )
}

export default Newarrival



 
