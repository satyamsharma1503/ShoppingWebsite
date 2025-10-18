import React, { useState } from "react";
import { data } from "../Data/Arrival";
import Card from "../Card/Card";

function Arrivals() {
  const [cards, setCards] = useState(
    data.map((item, index) => ({ ...item, id: index + 1, count: 0 }))
  );

  const handleIncrement = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, count: card.count + 1 } : card
      )
    );
  };

  const handleDecrement = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id && card.count > 0
          ? { ...card, count: card.count - 1 }
          : card
      )
    );
  };

  const totalItems = cards.reduce((sum, card) => sum + card.count, 0);

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <p className="text-[40px] py-8">New Arrivals</p>

      <div className="mb-5 text-xl font-semibold">
        Total Items in Cart: {totalItems}
      </div>

      <div className="max-w-[1200px] flex flex-wrap justify-center items-center gap-10">
        {cards.map((item) => (
          <Card
            key={item.id}
            {...item}
            onIncrement={() => handleIncrement(item.id)}
            onDecrement={() => handleDecrement(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Arrivals;
