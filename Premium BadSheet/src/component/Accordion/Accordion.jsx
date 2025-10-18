import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1100px] mx-auto my-2  bg-gray-200 p-4 rounded-md shadow-lg">
      {/* Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer"
      >
        <h2 className="text-lg font-semibold text-gray-800">
          Buy Premium Bedsheets Online from Ginnora Lifestyle
        </h2>
        <span className="text-gray-600">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </div>

      {/* Content (shows when open) */}
      {isOpen && (
        <div className="mt-3 text-gray-700 leading-relaxed">
          <p>
            Ginnora is the best place to buy bedsheets online in India. We make
            our bedsheets with a vision to serve our customers with the ultimate
            quality at the best price. Bedsheets are a piece of home essential
            that serves comfort and beauty. It plays a key role in letting us
            sleep deep so you get up full of energy and ready for the day. The
            fabric is carefully chosen and weaved so that it gives a soft
            sensation to your skin and avoids irritation, itching and rashes.
            These strike the perfect balance of softness, strength and
            durability. We provide bedsheets in all standard sizes to fit with
            your bed. At Ginnora, our mission is to make the bedsheet purchasing
            experience of our customers as easy and rewarding as possible. We
            believe your bed is where you rest, dream, and recharge, so why not
            make it look and feel its best? For this, we have made our website
            user-friendly, with clear and detailed descriptions, secure
            transactions, and filters to select specific colours, fabric and
            price. With easy browsing, quick checkout and simple shopping
            experience, you can find the best bedsheets online delivered at your
            doorstep without hassle. All you have to do is pick your favorite,
            sit back, and wait for your favourite selection to arrive.
          </p>
          <h2>Types of Bedsheets Based on Material</h2>
          <p>
            Material is the most important factor when you’re choosing
            bedsheets. Different fabrics suit different seasons, moods, and
            occasions. At Ginnora, we’ve carefully put together a wide variety
            of options so you don’t have to compromise. Whether it’s a light
            cotton bedsheet to survive India’s hot summers, a luxurious silk
            bedsheet that turns heads with its shine, we have something for
            everyone. Here are the popular types you’ll find at Ginnora: Cotton
            Bedsheets Cotton bedsheets are soft and breathable. Depending on the
            thread count, its softness and strength may vary. These are suitable
            for the Indian climate to keep you cool in summers and warm in
            winters. Silk Bedsheets Smooth, shiny and elegant are the top
            features of silk bedsheets. It adds an instant glamour to the room
            and makes it look luxurious. Often used on special occasions,
            gifting, or when you want to decorate your room like a five-star
            suite. Linen Bedsheets Linen has slightly coarse threading which
            gets softer after several washes. Due to its looser weave, it offers
            high breathability. Being stronger than cotton, it is highly
            durable. Our linen bedsheets are naturally hypoallergenic and
            anti-bacterial. Polyester and Blended Bedsheets These are affordable
            options and easy to maintain. Our polyester bedsheets are practical
            solutions for busy households. The wrinkle resistance and colour
            retention makes it a great choice. Satin and Velvet Bedsheets Our
            satin bedsheets are light, smooth and offer a high-end feel when
            touched. It is soft on skin and doesn’t attract dust and mites.
            Perfect for giving luxurious appeal and festive vibe to the room.
            Every fabric brings something unique to the table, and Ginnora
            ensures you have choices for both everyday living and special
            occasions.
          </p>
        </div>
      )}
    </div>
  );
}
