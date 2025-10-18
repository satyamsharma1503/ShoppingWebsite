import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5';
import { TbMenu2, TbMenu3 } from 'react-icons/tb';
import BedsheetCards12 from './BedsheetCards12';

function ViewCollection() {
   const [searchTerm, setSearchTerm] = useState("");
   const [isActive, setIsActive] = useState(false);
   const [selectedItem, setSelectedItem] = useState(null);
   const [showMenu, setShowMenu] = useState(false);
    const [value, setValue] = useState(0);


  const items = ["React", "Angular", "Vue", "Svelte", "Next.js", "Node.js"];

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (item) => {
    setSelectedItem(item);
    setSearchTerm(item);
    setIsActive(false);
  };
  let Categories = [
    {
      name: "Bedsheet",
      total: "(44)",
    },
    {
      name: "Elite",
      total: "(23)",
    },
    {
      name: "Flames",
      total: "(18)",
    },
    {
      name: "handbags",
      total: "(24)",
    },
  ];
  return (
    <div className="w-full flex gap-2 mx-auto py-5">
      <div className="w-[500px] max-h-screen  md:flex  flex-col hidden  p-2">
        <div className="flex  justify-between items-center rounded-full px-2 py-2 bg-amber-100 text-black">
          <input
            className="w-full outline-none font-semibold "
            type="text"
            placeholder="Search products..."
          />
          <IoSearchOutline />
        </div>
        <div className="p-2">
          <h1 className="py-4 font-medium  text-[20px]">Categories</h1>
          <div className=" flex flex-col gap-y-4">
            {Categories.map((items) => (
              <div className="flex justify-between  items-center">
                <h3>{items.name}</h3>
                <h3>{items.total}</h3>
              </div>
            ))}
          </div>
          <div>
            <h1 className="py-4 font-medium text-[20px]">Filter</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-black font-semibold">{value}%</span>
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full accent-green-700 cursor-pointer"
              />
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-[#1db022] text-white text-[17px] hover:bg-[#1db022bc] rounded-2xl px-8 py-1">
                Filter
              </button>
              <p>Price: ₹440-₹5000</p>
            </div>
          </div>
          <div>
            <h1 className="py-4 font-medium text-[20px]">Color</h1>
            <div className="relative  mx-auto">
              {/* Search Input */}
              <input
                type="search"
                placeholder="Search or select..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsActive(true)}
                onBlur={() => setTimeout(() => setIsActive(false), 150)}
                className="w-full px-4 py-2 border border-gray-300 bg-amber-100 rounded-full shadow-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500
                text-gray-700 placeholder-gray-400"
              />

              {/* Dropdown list */}
              {isActive && (
                <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                      <p
                        key={index}
                        onClick={() => handleSelect(item)}
                        className={`px-4 py-2 cursor-pointer ${
                          selectedItem === item
                            ? "bg-blue-100 text-blue-700"
                            : "hover:bg-blue-50 text-gray-800"
                        }`}
                      >
                        {item}
                      </p>
                    ))
                  ) : (
                    <p className="px-4 py-2 text-gray-500">No results found</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <button className="bg-[#1db022] text-white text-[17px] hover:bg-[#1db022bc] rounded-2xl px-8 py-1">
          Filter
        </button>
        <div>
          <h1 className="py-4 font-medium text-[20px]">Product Tags</h1>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`absolute top-45 left-0 z-10 w-full bg-[#314f31] text-zinc-100 font-semibold py-5 px-6 transition-all items-center duration-500 ease-in-out rounded-b-2xl shadow-2xl md:hidden ${
          showMenu
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="flex  justify-between items-center rounded-full px-2 py-2 bg-amber-100 text-black">
          <input
            className="w-full outline-none font-semibold "
            type="text"
            placeholder="Search products..."
          />
          <IoSearchOutline />
        </div>
        <div className="p-2">
          <h1 className="py-4 font-medium  text-[20px]">Categories</h1>
          <div className=" flex flex-col gap-y-4">
            {Categories.map((items) => (
              <div className="flex justify-between  items-center">
                <h3>{items.name}</h3>
                <h3>{items.total}</h3>
              </div>
            ))}
          </div>
          <div>
            <h1 className="py-4 font-medium text-[20px]">Filter</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white font-semibold">{value}%</span>
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full accent-green-700 cursor-pointer"
              />
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-[#1db022] text-white text-[17px] rounded-2xl px-8 py-1">
                Filter
              </button>
              <p>Price: ₹440-₹5000</p>
            </div>
          </div>
          <div>
            <h1 className="py-4 font-medium text-[20px]">Color</h1>
            <div className="relative  mx-auto">
              {/* Search Input */}
              <input
                type="search"
                placeholder="Search or select..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsActive(true)}
                onBlur={() => setTimeout(() => setIsActive(false), 150)}
                className="w-full px-4 py-2 border border-gray-300 bg-amber-100 rounded-full shadow-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500
                text-gray-700 placeholder-gray-400"
              />

              {/* Dropdown list */}
              {isActive && (
                <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                      <p
                        key={index}
                        onClick={() => handleSelect(item)}
                        className={`px-4 py-2 cursor-pointer ${
                          selectedItem === item
                            ? "bg-blue-100 text-blue-700"
                            : "hover:bg-blue-50 text-gray-800"
                        }`}
                      >
                        {item}
                      </p>
                    ))
                  ) : (
                    <p className="px-4 py-2 text-gray-500">No results found</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <button className="bg-[#1db022] text-white text-[17px] rounded-2xl px-8 py-1">
          Filter
        </button>
        <div>
          <h1 className="py-4 font-medium text-[20px]">Product Tags</h1>
        </div>
      </div>
      <div className="w-full  ">
        <div className="flex justify-center items-center">
          <button
            className="text-3xl text-zinc-800 md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row justify-between items-center text-center py-5 mx-2">
          <h4 className="md:flex hidden">Showing all 44 results</h4>
          <select className=" w-20  md:w-40 md:px-2 border-2 outline-none">
            <option>default sorting</option>
            <option>Sort popularity</option>
            <option>sort average rating</option>
            <option>Sort By latest</option>
            <option>Sort by price :Low to High</option>
            <option>Sort by price :high to Low</option>
          </select>
        </div>
        <BedsheetCards12/>
      </div>
    </div>
  );
}

export default ViewCollection