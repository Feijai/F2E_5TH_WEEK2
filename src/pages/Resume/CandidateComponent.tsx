import React from "react";
import { data } from "./candidateData";
import NumberSign from "./NumberSign";
import DataBlock from "./DataBlock";
import CandidateIcon from "./CandidateIcon";

const CandidateComponent: React.FC<{ id: string }> = ({ id }) => {
  const candidate = data[parseInt(id) - 1];
  return (
    <div className="px-[40px] py-[16px] w-full">
      <div className="leading-[30px] text-[14px] text-primary">
        中華民國第十五任總統暨副總統選舉 / {candidate.name}
      </div>
      <div className="mt-[60px] flex justify-center ">
        <img src={candidate.pic} alt="" className="w-[387px] h-[516px]" />
        <div className="ml-[24px]">
          <h1 className="flex items-center">
            <NumberSign id={1} />
            <span className="ml-[8px] font-bold text-[32px] text-primary">
              {candidate.name}
            </span>
          </h1>
          <div className="mt-[26px] flex flex-col gap-y-[14px] w-[284px]">
            <DataBlock
              title="政黨"
              context={candidate.group}
              img={candidate.group_pic}
            />
            <DataBlock title="競選搭檔" context={candidate.partner} />
            <DataBlock
              title="背景"
              context={`政治界：${candidate.background}`}
            />
            <DataBlock title="學歷" list={candidate.education} />
          </div>
        </div>
        <div className="ml-[20px]">
          <DataBlock title="學歷" list={candidate.experience} />
        </div>
      </div>
      <div>
        <CandidateIcon />
      </div>
    </div>
  );
};

export default CandidateComponent;
