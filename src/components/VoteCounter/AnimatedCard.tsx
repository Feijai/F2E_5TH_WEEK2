import React from "react";

const AnimatedCard: React.FC<{ animation: string; digit: number }> = ({
  animation,
  digit,
}) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

export default AnimatedCard;
