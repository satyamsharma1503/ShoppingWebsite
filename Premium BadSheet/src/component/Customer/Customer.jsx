import React from 'react'
import {IoHomeSharp} from "react-icons/io5";
import { user } from '../Data/User';

function Customer() {
  return (
        <div>
      <div className="w-full flex justify-center items-center">
        <h1 className="text-[#47c910] text-[27px] font-semibold">
          Why customers like you love us!!
        </h1>
      </div>
      <div className='bg-[#bbd0bb]'>
      <div className=" max-w-[1100px] mx-auto  flex  flex-wrap gap-10 justify-center items-center">
        {user.map((items, index) => (
            <div className=" flex flex-col justify-center items-center py-5">
            <div className="rounded-full p-2">
              <h2 className="">{items.icon}</h2>
            </div>
            <div className="text-[25px] font-bold">{items.name}</div>
            <p className="font-serif">{items.param}</p>
          </div>
        ))}
      </div>
        </div>
    </div>
  );
}

export default Customer