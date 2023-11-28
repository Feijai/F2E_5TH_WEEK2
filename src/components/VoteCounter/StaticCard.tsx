import React from "react";

const StaticCard: React.FC<{ position: string; digit: number }> = ({
  position,
  digit,
}) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

export default StaticCard;
