import React from 'react'

const InputBox = (props) => {
  return (
    <div className='mb-6'>
        <h4 className='font-dm font-bold text-base placeholder:font-dm placeholder:font-regular placeholder:text-sm placeholder:text-[#767676] mb-2.5'>{props.title}</h4>
        <props.as placeholder={props.placeholder} className=" outline-0 border-b border-solid border-[#F0F0F0] pb-2.5 w-full"/>
    </div>
  )
}

export default InputBox