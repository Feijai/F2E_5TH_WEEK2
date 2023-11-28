import React from "react";
import AnimatedCard from "./AnimatedCard";
import StaticCard from "./StaticCard";

const FlipUnitContainer: React.FC<{
  digit: number;
  shuffle: boolean;
}> = ({ digit, shuffle }) => {
  // assign digit values
  const currentDigit = digit;
  const previousDigit = digit === 9 ? 0 : digit + 1;

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? "fold" : "unfold";
  const animation2 = !shuffle ? "fold" : "unfold";

  return (
    <div className={"flipUnitContainer"}>
      <StaticCard position={"upperCard"} digit={currentDigit} />
      <StaticCard position={"lowerCard"} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  );
};

export default FlipUnitContainer;
