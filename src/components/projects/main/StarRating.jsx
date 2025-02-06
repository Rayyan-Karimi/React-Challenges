import { useState } from "react";
import "../styles/StarRating.css";
import ChallengeHeader from "../../util/ChallengeHeader";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => {
      const item = index + 1;
      const isFilled = item <= (hoverRating || rating);

      return (
        <span
          key={item}
          className={`star ${isFilled ? "filled" : ""}`}
          onMouseEnter={() => setHoverRating(item)}
          onMouseLeave={() => setHoverRating(rating)}
          onClick={() => setRating(item)}
        >
          ★
        </span>
      );
    });
  };

  return (
    <div>
      <ChallengeHeader title={"Star Rating"} />
      <div className="flex flex-col justify-center items-center">
        <div>{renderStars()}</div>
        <p>Your hover rating: {hoverRating}</p>
        <p>Your rating: {rating}</p>
      </div>
    </div>
  );
};

export default StarRating;
