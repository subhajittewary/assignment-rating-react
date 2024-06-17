import { useState } from "react";

function Rating({ defaultRating, totalRating }) {
  const [selectedRating, setSelectedRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState(null);

  function handleRatingClick(ratingValue) {
    setHoverRating(null);
    setSelectedRating(ratingValue);
  }

  return (
    <>
      <h1>Rating Component 😊</h1>
      {[...Array(totalRating)].map((_, index) => {
        const ratingValue = index + 1;
        const isActive = ratingValue <= (hoverRating || selectedRating);
        return (
          <button
            className={`rating-item ${isActive ? "yellow" : ""}`}
            key={index}
            onClick={() => handleRatingClick(ratingValue)}
            onMouseEnter={() => setHoverRating(ratingValue)}
            onMouseLeave={() => setHoverRating(null)}
            aria-pressed={isActive}
            aria-label={`Rate ${ratingValue} star${
              ratingValue > 1 ? "s" : ""
            } of total rating ${totalRating}`}
            tabIndex={0}
          ></button>
        );
      })}
    </>
  );
}

export default Rating;
