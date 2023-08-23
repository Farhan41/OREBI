import React from 'react'
import Banner from '../components/layout/Banner'
import Bannerbottom from '../components/layout/Bannerbottom'
import Advertise from '../components/layout/Advertise'
import Newarrival from '../components/layout/Newarrival'
import Bestseller from '../components/layout/Bestseller'
import MiddleAdvertise from '../components/layout/MiddleAdvertise'
import Specialoffer from '../components/layout/Specialoffers'
import Footer from '../components/layout/Footer'

const Home = () => {
  return (
  <>
  <Banner/>
  <Bannerbottom/>
  <Advertise/>
  <Newarrival/>
  <Bestseller/>
  <MiddleAdvertise/>
  <Specialoffer/> 
  <Footer/>
  </>


  )
}

export default Home