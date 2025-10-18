import React, { useState } from "react";
import Card from "../Card/Card";
import { data } from "../Data/Bedsheet.jsx";

function Selling() {
  // Add count property to each card in state
  const [cards, setCards] = useState(
    data.map((item, index) => ({ ...item, id: index + 1, count: 0 }))
  );

  // Increment count for a specific card
  const handleIncrement = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, count: card.count + 1 } : card
      )
    );
  };

  // Decrement count for a specific card
  const handleDecrement = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id && card.count > 0
          ? { ...card, count: card.count - 1 }
          : card
      )
    );
  };

  // Total items in cart
  const totalItems = cards.reduce((sum, card) => sum + card.count, 0);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-[30px] py-10">Best Selling Items</h1>

      {/* Total Items */}
      <div className="mb-5 text-xl font-semibold">
        Total Items in Cart: {totalItems}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10">
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

export default Selling;
