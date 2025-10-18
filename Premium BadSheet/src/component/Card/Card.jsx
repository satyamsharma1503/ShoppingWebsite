import React from "react";
import { TfiShoppingCart } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Card({
  name,
  category,
  cross,
  price,
  percentage,
  image,
  count,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="w-36 md:w-60 flex flex-col items-center text-center relative">
      <div className="overflow-hidden flex justify-center py-2 items-center">
        <img
          src={image}
          alt={name}
          className="hover:scale-110 transform transition-all ease-in-out duration-500"
        />
      </div>

      <h4>{name}</h4>
      <h5 className="text-gray-400 text-[13px]">{category}</h5>
      <div className="flex gap-2">
        <h4 className="line-through text-gray-400">{cross}</h4>
        <h4>{price}</h4>
      </div>

      <div className="flex gap-5 rounded-2xl items-center p-1">
        <div
          onClick={onDecrement}
          className="bg-green-600 rounded-full w-8 flex justify-center items-center cursor-pointer"
        >
          <p>-</p>
        </div>
        <p>{count}</p>
        <div
          onClick={onIncrement}
          className="bg-green-600 rounded-full w-8 flex justify-center items-center cursor-pointer"
        >
          <p>+</p>
        </div>
      </div>
      {
        
      }
      <Link to="bedsheet" >
      <button className="flex justify-center items-center gap-1 bg-amber-400 hover:bg-amber-300 cursor-pointer px-3 my-1 py-1 rounded-2xl">
        <TfiShoppingCart />
        <h5>Read more</h5>
      </button>
      </Link>
      <div className="absolute top-2 left-1 bg-[#d81010d7] text-white rounded-xs text-[13px] py-1 px-2">
        <p>{percentage}</p>
      </div>
    </div>
  );
}

export default Card;
