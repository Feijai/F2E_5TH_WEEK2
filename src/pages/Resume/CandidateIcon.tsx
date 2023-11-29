import React from "react";
import { candidateBtn } from "./candidateData";

const CandidateIcon = () => {
  const data = candidateBtn[0];
  return (
    <button>
      <div
        className={`bg-[url('/src/assets/userIcon/Property1.png') hover:bg-[url('${data.pic_hover}')] w-[82px] h-[82px]`}
      ></div>
      <span className="mt-[8px] text-center leading-[28.96px] text-[20px] ">
        {data.name}
      </span>
    </button>
  );
};

export default CandidateIcon;
