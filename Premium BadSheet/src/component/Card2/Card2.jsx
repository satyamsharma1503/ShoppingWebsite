import React from "react";

function Card2({
  name,
  cross,
  price,
  category,
  percentage,
  image,
  count,
  rating,
  star,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="md:w-72 w-36 relative   py-2 overflow-hidden flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <img src={image} alt={name} className="w-full md:h-60 object-cover " />
      <div className="md:p-4 p-1 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-500 text-sm">{category}</p>

        <div className="flex items-center justify-center gap-2 md:mt-2">
          <span className="text-gray-400 line-through">{cross}</span>
          <span className="text-green-600 font-bold">{price}</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <h2>{rating}</h2>
          <h2>{star}</h2>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-4 md:mt-4">
          <button
            onClick={onDecrement}
            className="bg-gray-200 text-gray-700 px-3 py-0.5 md:py-1 rounded-full hover:bg-gray-300 transition"
          >
            -
          </button>
          <span className="text-lg font-semibold">{count}</span>
          <button
            onClick={onIncrement}
            className="bg-green-500 text-white px-3 py-0.5 md:py-1 rounded-full hover:bg-green-600 transition"
          >
            +
          </button>
        </div>
      </div>
      <p className="bg-red-500  text-sm top-3 left-3 absolute">{percentage}</p>
    </div>
  );
}

export default Card2;
