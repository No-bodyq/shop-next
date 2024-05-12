import React, { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={handleDecrease}
        className="bg-black py-0 px-4 text-white"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={handleIncrease}
        className="bg-black py-0 px-4 text-white"
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
