import React, { useState } from "react";
import Rating from "./Rating";
import Quantity from "./Quantity";

export default function Modal({ img, name, price, itemRating }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(itemRating);

  const handleRatingChange = (newRating) => {
    setRating(newRating + 1);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen ? (
        <img
          src="black-bag.svg"
          className="w-6 h-6 cursor-pointer"
          onClick={handleClick}
        />
      ) : (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 opacity-40 z-20 bg-black flex justify-center items-center"></div>
          <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center z-30">
            <div className="bg-white h-[32rem] w-[32rem] rounded-xl p-2 absolute">
              <top className="w-full relative z-50 flex justify-end">
                <div className="bg-black rounded-3xl text-white w-7 h-7 p-1 opacity-30 hover:opacity-60 flex justify-center items-center cursor-pointer">
                  <button onClick={handleClick}>X</button>
                </div>
              </top>
              <div className="bg-gray-300 w-full h-80 absolute top-0 left-0 rounded-t-xl object-contain flex justify-center items-center">
                <img src={img} className="h-80 relative bottom-4" />
              </div>
              <div className="relative top-[18rem] px-3 py-1 w-full flex justify-between">
                <div>
                  <div className="flex gap-2">
                    <h2 className="text-black font-bold text-2xl">{name}</h2>
                    <Rating
                      rating={rating}
                      totalStars={5}
                      onRatingChange={handleRatingChange}
                    />
                  </div>
                  <p className="text-xl">${price.toFixed(2)}</p>
                </div>
                <div>
                  <Quantity />
                </div>
              </div>
              <div className="relative top-[22rem] w-full p-2 bg-black text-white flex justify-center rounded-xl">
                <h3>Add to cart</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
