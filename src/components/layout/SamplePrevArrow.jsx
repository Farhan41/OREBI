import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai"

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
      className=" !flex justify-center items-center h-16 w-16 rounded-full absolute top-[35%] left-0 bg-[rgba(0,0,0,.20)] z-50"
      style={{ ...style,
          // display: "block",
          // background: "red" 
        }}
        onClick={onClick}
      >
        <AiOutlineArrowLeft className='text-2xl text-white'/>
      </div>
    );
}

export default SamplePrevArrow