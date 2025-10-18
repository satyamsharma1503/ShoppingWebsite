import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

function Revision() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div onClick={()=>setIsOpen(!isOpen)}>
      <h2 className="text-lg font-semibold text-gray-800">
        Buy Premium Bedsheets Online from Ginnora Lifestyle
      </h2>
      <span>
        {isOpen ? <FaMinus/>:<FaPlus/>}
      </span>
    </div>

    {isOpen && (
        <div className="mt-3 text-gray-700 leading-relaxed">
          <p>
            Discover our exclusive range of high-quality bedsheets crafted from
            premium fabrics to give you comfort and elegance. At Ginnora
            Lifestyle, we ensure style meets softness for your perfect sleep
            experience.
          </p>
        </div>
      )}
    </>
  );
}

export default Revision