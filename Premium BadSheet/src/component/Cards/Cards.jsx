import React from 'react'

function Cards() {
    const items = [
      {
        name: "BedSheet",
        img: "https://www.ginnora.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-08-at-15.33.40-1.jpeg",
      },
      {
        name: "Handbags",
        img: "https://www.ginnora.com/wp-content/uploads/2025/05/pexels-biuro-tlumaczen-13269-63778-1536x1024.jpg",
      },
      {
        name: "Towel",
        img: "https://www.ginnora.com/wp-content/uploads/2025/05/pexels-nxai96-2684062-1536x1024.jpg",
      },
    ];
  return (
    <div className="max-w-[1100px] mx-auto px-8 py-8">
      <div className="flex flex-wrap justify-center  gap-5 items-center  ">
        {items.map((items, index) => (
          <div className="flex justify-center flex-col  gap-4 items-center text-center">
            <img
              className="w-80 hover:scale-90 transform transition-all ease-in-out duration-500"
              src={items.img}
              alt="reload"
            />
            <h2 className="text-2xl px-10 font-semibold ">{items.name}</h2>
            <button className="bg-[#22980eea] rounded-3xl px-8 py-2  flex justify-center text-center items-center cursor-pointer text-white hover:text-black transform transition-all ease-in-out duration-500 font-semibold">
              View Collection
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards