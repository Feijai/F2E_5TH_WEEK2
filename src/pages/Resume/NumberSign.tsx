import React from "react";

const NumberSign: React.FC<{ id: number }> = ({ id }) => {
  return (
    <div className="bg-primary text-white font-bold w-[34px] h-[34px] rounded-full text-[28px] text-center leading-[34px]">
      {id}
    </div>
  );
};

export default NumberSign;
