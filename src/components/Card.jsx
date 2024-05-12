import React from "react";
import Modal from "./Modal";

export default function Card({
  id,
  img,
  name,
  price,
  isLimited,
  liked,
  handleLike,
  rating,
}) {
  const heart = "heart.svg";
  const redHeart = "red-heart.svg";

  const handleClick = (e) => {
    handleLike(e);
  };

  return (
    <div className="w-full h-full">
      <div className="bg-gray-200 w-full h-[80%] rounded-lg mb-3 p-3">
        <top className="flex justify-between">
          <div>
            {isLimited && (
              <div className="bg-gray-500 text-white px-2 py-1 text-xs rounded-md">
                Limited
              </div>
            )}
          </div>
          <div
            className="bg-white rounded-full p-2"
            id={id}
            onClick={handleClick}
          >
            <img
              src={liked ? redHeart : heart}
              className="w-4 h-4 text-white cursor-pointer"
              id={id}
              onClick={handleClick}
            />
          </div>
        </top>
        <div className="flex justify-center w-full h-64 items-center object-contain object-center">
          <img
            src={img && img}
            className="h-60 flex justify-center items-center relative bottom-8"
          />
        </div>
      </div>
      <div className="flex justify-between px-2">
        <div>
          <p>{name}</p>
          <p className="font-bold">${price.toFixed(2)}</p>
        </div>
        <div>
          <Modal
            img={img && img}
            name={name}
            price={price}
            itemRating={rating}
          />
        </div>
      </div>
    </div>
  );
}
