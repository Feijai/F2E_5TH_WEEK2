import VoteCounter from "@/components/VoteCounterBar";
import React from "react";
import "./home.scss";
import LOGO from "@/assets/LOGO.png";
const Home = () => {
  return (
    <div>
      <div className="bg bg-gradient-to-b from-[#0D2562] to-[#495981] px-[31px] py-[21px]">
        <img src={LOGO} alt="" className="w-[110px] h-[60px] " />

        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-end items-center text-[30px] font-bold text-[#FEFBF399]/25 max-w-[991px] w-full">
            <div className="">TAIWAN Presidential Election</div>
          </div>
          <div className="flex">
            <a href="/candidate/1">
              <div
                className="candidate_button1"
                onClick={() => console.log("in")}
              />
            </a>
            <div
              className="candidate_button2 ml-[-81px]"
              onClick={() => console.log("in1")}
            />
            <div
              className="candidate_button3 ml-[-85px]"
              onClick={() => console.log("in2")}
            />
            <div
              className="candidate_button4 ml-[19px]"
              onClick={() => console.log("in3")}
            />
          </div>
        </div>
      </div>
      <VoteCounter />
    </div>
  );
};

export default Home;
