import React from "react";

const TextBlock: React.FC<{ text: string }> = ({ text }) => {
  return <div className="ml-[6px] mr-[10px] text-[16px]">{text}</div>;
};

export default TextBlock;
