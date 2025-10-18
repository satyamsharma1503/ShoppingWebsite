import React from 'react'
// import {FaCottonBureau} from "react-icons/fa";
import { icon } from '../Data/Icon';
// import icon from "../Data/Icon.jsx"

function Icon() {
  return (
    <div className=" max-w-[1100px] flex flex-wrap gap-14 justify-center items-center text-center mx-auto px-10 py-10 ">
        {
            icon.map((items,index)=>(

      <div  className='flex w-44 md:w-28 flex-col justify-center items-center text-center'>
        <p className='text-7xl md:text-5xl py-2 md:py-5'>
        {items.icon}
        </p>
        <h2 className="text-[30px] md:text-[21px]  text-center font-bold text-[#21211ffe]">{items.name}</h2>
      </div>
            ))
        }
    </div>
  );
}

export default Icon