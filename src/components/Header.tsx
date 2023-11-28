import React from "react";
import Logo from "@/assets/LOGO.png";

export default function Header() {
  return (
    <div className="h-[60px] bg-primary text-white md:px-[40px] flex items-center justify-between">
      <div className="flex items-center">
        <img src={Logo} alt="" />
        <p className="hidden ml-[12px] md:block text-[20px] font-bold">總統大選開票</p>
      </div>
      <div className="text-lightColor flex text-[16px]">
        <div>即時開票地圖</div>
        <div className="ml-[24px] ">首頁</div>
      </div>
    </div>
  );
}
