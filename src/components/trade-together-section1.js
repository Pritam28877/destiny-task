import * as React from "react";
import { useMemo } from "react";

const TradeTogetherSection1 = ({ propBackgroundImage }) => {
  const frameDiv8Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[140px] px-0 gap-[82px] bg-[url('/frame-1000005536@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-53xl text-white font-mobile-caption-1-medium"
      style={frameDiv8Style}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center gap-[24px]">
          <b className="relative tracking-[-2.1px] leading-[76.88px]">
            <span>{`Trade Together. `}</span>
            <span className="text-electric-green-primary">
              Thrive Together.
            </span>
          </b>
          <div className="relative text-5xl leading-[32.85px] text-neutrals-grey-4 text-left">
            Join the fun-filled community on our platform.
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-gray-400 [backdrop-filter:blur(52.5px)] box-border w-[1140px] h-[171px] overflow-hidden shrink-0 flex flex-row items-center justify-between text-13xl border-[1px] border-solid border-gray-300">
        <div className="flex-1 flex flex-col items-center justify-center gap-[4px]">
          <b className="relative">10,000+</b>
          <div className="relative text-base leading-[26px] text-darkgray">
            Traders
          </div>
        </div>
        <img className="relative w-px h-[88px]" alt="" src="/vector-11.svg" />
        <div className="flex-1 flex flex-col items-center justify-center gap-[4px]">
          <b className="relative">100Mn</b>
          <div className="relative text-base leading-[26px] text-darkgray">
            Daily Volume Traded
          </div>
        </div>
        <img className="relative w-px h-[88px]" alt="" src="/vector-11.svg" />
        <div className="flex-1 flex flex-col items-center justify-center gap-[4px]">
          <b className="relative">Daily</b>
          <div className="relative text-base leading-[26px] text-darkgray">
            Trade Analysis
          </div>
        </div>
        <img className="relative w-px h-[88px]" alt="" src="/vector-11.svg" />
        <div className="flex-1 flex flex-col items-center justify-center gap-[4px]">
          <b className="relative">Live</b>
          <div className="relative text-base leading-[26px] text-darkgray">
            Signals
          </div>
        </div>
      </div>
      <div className="rounded-lg [background:linear-gradient(85.85deg,_#d4f938_29.17%,_#32d875)] shadow-[0px_0px_16px_rgba(168,_239,_156,_0.8)] [backdrop-filter:blur(10px)] h-12 flex flex-row items-center justify-center py-6 px-12 box-border text-lg text-black">
        <b className="relative uppercase">Join community</b>
      </div>
    </div>
  );
};

export default TradeTogetherSection1;
