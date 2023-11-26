import * as React from "react";

const Header = ({ dimensions }) => {
  return (
    <div className="self-stretch bg-darkolivegreen [backdrop-filter:blur(40px)] flex flex-row items-center justify-center py-6 px-[216px] gap-[387px] text-left text-sm text-gray-100 font-mobile-caption-1-medium">
      <img
        className="relative w-[100px] h-6 overflow-hidden shrink-0"
        alt=""
        src={dimensions}
      />
      <div className="flex flex-row items-center justify-end gap-[56px]">
        <div className="flex flex-row items-start justify-start gap-[34px]">
          <div className="relative">Career</div>
          <div className="relative">Blogs</div>
          <div className="relative">Leaderboard</div>
          <div className="relative">Fees</div>
        </div>
        <div className="rounded-lg [background:linear-gradient(85.85deg,_#d4f938_29.17%,_#32d875)] shadow-[0px_0px_16px_rgba(168,_239,_156,_0.8)] [backdrop-filter:blur(10px)] h-12 flex flex-row items-center justify-center py-4 px-8 box-border text-base text-black">
          <b className="relative uppercase">Trade Now</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
