
import React, { useEffect, useMemo } from 'react';

const AnimatedStars = () => {
  const stars = useMemo(() => {
    const starArray = [];
    for (let i = 0; i < 100; i++) {
      starArray.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
      });
    }
    return starArray;
  }, []);

  return (
    <div className="stars">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedStars;
