import React from "react";
import VoteC from "@/assets/voteC.png";
import VoteCounter from "./VoteCounter";

export default function VoteCounterBar() {
  return (
    <div className="flex items-center justify-center py-[12px] h-[62px]">
      <img src={VoteC} alt="" />
      <h3 className="text-primary ml-[12px] font-[900] text-[24px] [text-shadow:_0_3px_2px_rgba(0,0,0,0.25)]">
        2024開票日倒數
      </h3>
      <div className="ml-[19px]">
        <VoteCounter />
      </div>
    </div>
  );
}
