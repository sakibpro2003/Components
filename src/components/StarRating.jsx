import React, { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
const StarRating2 = ({ max = 5 }) => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  //   const star = useMemo(() => Array.from({ length: max }, (_, i) => i + 1, [max]);
  const star = useMemo(
    () => Array.from({ length: max }, (_, i) => i + 1),
    [max]
  );
  console.log(star, "star66");

  return (
    <div className="mt-20">
      {star.map((num) => {
        const isActive = num <= (hover || rating);
        return (
          <button
            onMouseEnter={() => setHover(num)}
            onClick={() => setRating(num)}
            onMouseLeave={() => setHover(null)}
          >
            <FaStar
              className={`text-3xl transition-colors duration-150 ${
                isActive ? "text-amber-400 drop-shadow" : "text-slate-300"
              }`}
            ></FaStar>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating2;
