import * as React from "react";

const SectionCardFormFilter = ({ uniqueId, uniqueTextId, uniqueImageId }) => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center py-0 px-[216px] text-left text-21xl text-electric-green-primary font-mobile-caption-1-medium">
      <div className="self-stretch bg-gray-200 shadow-[0px_0px_10px_rgba(235,_255,_37,_0.2)] [backdrop-filter:blur(52.5px)] h-[171px] overflow-hidden shrink-0 flex flex-row items-center justify-between">
        <div className="flex-1 flex flex-col items-center justify-center gap-[4px]">
          <b className="relative">00%</b>
          <div className="relative text-base leading-[26px] font-medium text-darkgray">{`Conversion Fee `}</div>
        </div>
        <img className="relative w-[1.5px] h-[172px]" alt="" src={uniqueId} />
        <div className="flex-1 flex flex-col items-center justify-center gap-[4px]">
          <b className="relative">500 Mn+</b>
          <div className="relative text-base leading-[26px] font-medium text-darkgray">
            Lifetime Volume Traded
          </div>
        </div>
        <img
          className="relative w-[1.5px] h-[172px]"
          alt=""
          src={uniqueTextId}
        />
        <div className="flex-1 flex flex-col items-center justify-center gap-[4px]">
          <b className="relative">250+</b>
          <div className="relative text-base leading-[26px] font-medium text-darkgray">
            Total Tradable Pairs
          </div>
        </div>
        <img
          className="relative w-[1.5px] h-[172px]"
          alt=""
          src={uniqueImageId}
        />
        <div className="flex-1 flex flex-col items-center justify-center gap-[4px]">
          <b className="relative">15,000+</b>
          <div className="relative text-base leading-[26px] font-medium text-darkgray">
            Traders
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCardFormFilter;
