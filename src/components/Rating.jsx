import React, { useState } from "react";

const Rating = ({ rating, totalStars, onRatingChange }) => {
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(totalStars)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <span
              className="star"
              style={{
                color:
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
              onClick={() => onRatingChange(index)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
