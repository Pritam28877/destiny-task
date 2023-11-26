import * as React from "react";
import { useMemo } from "react";

const FrontierUnlockSection = ({ propBackgroundImage }) => {
  const frameDiv7Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[150px] px-0 gap-[64px] text-center text-53xl text-electric-green-primary font-mobile-caption-1-medium">
      <div className="flex flex-col items-center justify-start gap-[28px]">
        <b className="relative tracking-[-2.1px] leading-[76.88px] inline-block w-[846px]">
          <span>Unlock</span>
          <span className="text-greenyellow">{` `}</span>
          <span className="text-white">New Frontiers.</span>
        </b>
        <div className="relative text-[22.37px] leading-[32.85px] text-neutrals-grey-4 inline-block w-[659.1px]">
          Are you a stock trader looking for new opportunities to make money? We
          got you covered!
        </div>
      </div>
      <div className="rounded-lg bg-gray-400 [backdrop-filter:blur(52.5px)] box-border w-[1140px] h-[171px] overflow-hidden shrink-0 flex flex-row items-center justify-between text-13xl text-white border-[1px] border-solid border-gray-300">
        <div className="flex-1 flex flex-col items-center justify-center">
          <b className="relative">
            <p className="m-0">Same</p>
            <p className="m-0">Strategies</p>
          </b>
        </div>
        <img className="relative w-px h-[88px]" alt="" src="/vector-11.svg" />
        <div className="flex-1 flex flex-col items-center justify-center">
          <b className="relative">
            <p className="m-0">Same</p>
            <p className="m-0">Indicators</p>
          </b>
        </div>
        <img className="relative w-px h-[88px]" alt="" src="/vector-11.svg" />
        <div className="flex-1 flex flex-col items-center justify-center">
          <b className="relative">
            <p className="m-0">Better</p>
            <p className="m-0">Leverage</p>
          </b>
        </div>
        <img className="relative w-px h-[88px]" alt="" src="/vector-11.svg" />
        <div className="flex-1 flex flex-col items-center justify-center">
          <b className="relative">
            <p className="m-0">24x7</p>
            <p className="m-0">Trading</p>
          </b>
        </div>
      </div>
      <div
        className="w-[1130px] h-[510px] flex flex-col items-start justify-start py-[34.009765625px] px-[54px] box-border bg-[url('/frame-1000003839@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-overlay text-left text-sm text-tomato"
        style={frameDiv7Style}
      >
        <div className="w-[966px] flex flex-row items-start justify-start">
          <div className="flex-1 relative h-[420px] overflow-hidden">
            <div className="absolute top-[0px] left-[0px] w-[684.5px] h-[421.5px]">
              <img
                className="absolute top-[7.9px] left-[0px] w-[684.5px] h-[413.5px]"
                alt=""
                src="/vector-1176.svg"
              />
              <div className="absolute top-[207px] left-[101px] flex flex-row items-start justify-start gap-[6px]">
                <img
                  className="relative w-[19px] h-[19px]"
                  alt=""
                  src="/group-1000003828.svg"
                />
                <div className="relative">Sell</div>
              </div>
              <div className="absolute top-[32px] left-[264px] flex flex-row items-start justify-start gap-[6px]">
                <img
                  className="relative w-[19px] h-[19px]"
                  alt=""
                  src="/group-1000003828.svg"
                />
                <div className="relative">Sell</div>
              </div>
              <div className="absolute top-[0px] left-[506px] flex flex-row items-start justify-start gap-[6px]">
                <img
                  className="relative w-[19px] h-[18.5px]"
                  alt=""
                  src="/group-1000003828.svg"
                />
                <div className="relative">Sell</div>
              </div>
              <div className="absolute top-[384px] left-[152px] flex flex-row items-start justify-start gap-[6px] text-mediumspringgreen-100">
                <img
                  className="relative w-[19px] h-[19px]"
                  alt=""
                  src="/group-1000003829.svg"
                />
                <div className="relative">Buy</div>
              </div>
              <div className="absolute top-[194px] left-[425px] flex flex-row items-start justify-start gap-[6px] text-mediumspringgreen-100">
                <img
                  className="relative w-[19px] h-[19px]"
                  alt=""
                  src="/group-1000003829.svg"
                />
                <div className="relative">Buy</div>
              </div>
            </div>
            <div className="absolute top-[24px] left-[28px] text-5xl text-white">
              BTCUSDT
            </div>
          </div>
          <img
            className="self-stretch relative max-h-full w-px"
            alt=""
            src="/vector-1178.svg"
          />
          <div className="relative w-[400px] h-[420px] overflow-hidden shrink-0 text-mediumspringgreen-100">
            <div className="absolute top-[64px] left-[-287px] w-[687px] h-[311px]">
              <img
                className="absolute top-[5.1px] right-[-262.5px] w-[662.5px] h-[306px]"
                alt=""
                src="/vector-1177.svg"
              />
              <div className="absolute top-[65px] right-[0px] flex flex-row items-start justify-start gap-[6px]">
                <img
                  className="relative w-[19px] h-[19px]"
                  alt=""
                  src="/group-1000003829.svg"
                />
                <div className="relative">Buy</div>
              </div>
              <div className="absolute top-[104px] right-[529px] flex flex-row items-start justify-start gap-[6px] text-tomato">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/group-1000003828.svg"
                />
                <div className="relative">Sell</div>
              </div>
              <div className="absolute top-[0px] right-[85px] flex flex-row items-start justify-start gap-[6px] text-tomato">
                <img
                  className="relative w-[19px] h-[19px]"
                  alt=""
                  src="/group-1000003828.svg"
                />
                <div className="relative">Sell</div>
              </div>
              <div className="absolute top-[282px] right-[621px] flex flex-row items-start justify-start gap-[6px]">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/group-1000003829.svg"
                />
                <div className="relative">Buy</div>
              </div>
              <div className="absolute top-[291px] right-[297px] flex flex-row items-start justify-start gap-[6px]">
                <img
                  className="relative w-[19px] h-[19px]"
                  alt=""
                  src="/group-1000003829.svg"
                />
                <div className="relative">Buy</div>
              </div>
            </div>
            <div className="absolute top-[355px] left-[302px] text-5xl uppercase text-white text-right">
              nifty
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontierUnlockSection;
