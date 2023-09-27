import React from 'react'
import Container from '../components/layout/Container'
import Breadcrumb from '../components/layout/Breadcrumb'
import InputBox from '../components/layout/InputBox'
import Button from '../components/layout/Button'

const Contact = () => {
  return (
    <Container>
        <Breadcrumb/>
        <div className='w-2/4'>
            <h2 className='font-dm font-bold text-4xl mb-10'>Fill up a Form</h2>
            <InputBox as="input" placeholder="Your name here" title="Name"/>
            <InputBox as="input" placeholder="Your email here" title="Email"/>
            <InputBox as="textarea" placeholder="Your message here" title="Message"/>
        </div>
        <Button title="Post"/>

        <div className='my-10'>
        <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0984146591336!2d90.3894469745173!3d23.74386968902859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8be61f9fe79%3A0x9f2288c238c55fda!2sEastern%20Plaza%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1695826684062!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
     </Container>
  )
}

export default Contact