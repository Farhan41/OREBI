import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"

const SampleNextArrow = (props) => {

    const { className, style, onClick } = props;
    return (
      <div
        className=" !flex justify-center items-center h-16 w-16 bg-green-500 rounded-full absolute top-[35%] right-[28px] bg-[rgba(0,0,0,.20)]"
        style={{ ...style,
            // display: "block",
            // background: "red" 
          }}
        onClick={onClick}
      >
        <AiOutlineArrowRight className='text-2xl text-white'/>
      </div>
    );

}

export default SampleNextArrow