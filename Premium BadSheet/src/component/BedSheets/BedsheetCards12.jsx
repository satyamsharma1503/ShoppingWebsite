import React, { useState } from "react";
import Card2 from "../Card2/Card2.jsx";
import { AllData } from "../Data/AllBedsheet.jsx";

function BedsheetCards12() {
  const [cards, setCards] = useState(
    AllData.map((item, index) => ({ ...item, id: index + 1, count: 0 }))
  );

  const updateCount = (id, delta) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? { ...card, count: Math.max(card.count + delta, 0) }
          : card
      )
    );
  };

  return (
    <div className="md:w-full flex flex-col justify-center items-center py-5">
      <div className="flex flex-wrap  md:w-full justify-center items-center gap-10">
        {cards.map((item) => (
          <Card2
            key={item.id}
            {...item}
            onIncrement={() => updateCount(item.id, 1)}
            onDecrement={() => updateCount(item.id, -1)}
          />
        ))}
      </div>
    </div>
  );
}

export default BedsheetCards12;
