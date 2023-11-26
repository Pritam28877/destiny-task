import * as React from "react";
import { useMemo } from "react";

const TradeMorePayLessSection = ({
  dimension,
  imageDimensions,
  imageDimensionsText,
  imageDimensionsText2,
  imageDimensionsText3,
  propWidth,
  propRight,
  propLeft,
  propLeft1,
  propLeft2,
  propWidth1,
  propRight1,
  propLeft3,
  propLeft4,
  propLeft5,
  propWidth2,
  propRight2,
  propWidth3,
  propRight3,
  propLeft6,
  propLeft7,
  propLeft8,
}) => {
  const frameIconStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv1Style = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const image92IconStyle = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const frameIcon1Style = useMemo(() => {
    return {
      width: propWidth1,
      right: propRight1,
    };
  }, [propWidth1, propRight1]);

  const frameDiv2Style = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  const frameDiv3Style = useMemo(() => {
    return {
      left: propLeft4,
    };
  }, [propLeft4]);

  const frameDiv4Style = useMemo(() => {
    return {
      left: propLeft5,
    };
  }, [propLeft5]);

  const textureIconStyle = useMemo(() => {
    return {
      width: propWidth2,
      right: propRight2,
    };
  }, [propWidth2, propRight2]);

  const frameIcon2Style = useMemo(() => {
    return {
      width: propWidth3,
      right: propRight3,
    };
  }, [propWidth3, propRight3]);

  const frameDiv5Style = useMemo(() => {
    return {
      left: propLeft6,
    };
  }, [propLeft6]);

  const frameDiv6Style = useMemo(() => {
    return {
      left: propLeft7,
    };
  }, [propLeft7]);

  const image93IconStyle = useMemo(() => {
    return {
      left: propLeft8,
    };
  }, [propLeft8]);

  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[140px] px-0 gap-[82px] text-center text-53xl text-white font-mobile-caption-1-medium">
      <div className="flex flex-col items-center justify-start gap-[24px]">
        <b className="relative tracking-[-2.1px] leading-[76.88px]">
          <span>{`Trade More. `}</span>
          <span className="text-electric-green-primary">Pay Less.</span>
        </b>
        <div className="relative text-5xl leading-[32.85px] text-neutrals-grey-4 inline-block w-[659.1px]">
          Our low Fees Supercharge Your Profits
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center py-0 px-[150px] gap-[20px] text-left text-13xl">
        <div className="flex-1 relative bg-neutrals-grey-9 h-[438px] overflow-hidden">
          <img
            className="absolute h-[54.57%] w-[77.11%] top-[0%] right-[22.89%] bottom-[45.43%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.1]"
            alt=""
            src={dimension}
            style={frameIconStyle}
          />
          <div
            className="absolute top-[281px] left-[calc(50%_-_42.35px)] flex flex-col items-center justify-center"
            style={frameDivStyle}
          >
            <b className="relative tracking-[-1.69px] leading-[50.63px]">
              0.07
            </b>
            <div className="relative text-xl tracking-[-1.69px] opacity-[0.5]">
              Taker Fees
            </div>
          </div>
          <div
            className="absolute top-[148px] left-[calc(50%_-_45.85px)] flex flex-col items-center justify-center"
            style={frameDiv1Style}
          >
            <b className="relative tracking-[-1.69px] leading-[50.63px]">
              0.025
            </b>
            <div className="relative text-xl tracking-[-1.69px] opacity-[0.5]">
              Maker Fees
            </div>
          </div>
          <img
            className="absolute top-[55px] left-[calc(50%_-_73.35px)] w-[146px] h-[30px] object-cover opacity-[0.5]"
            alt=""
            src="/image-92@2x.png"
            style={image92IconStyle}
          />
        </div>
        <div className="flex-1 relative [background:linear-gradient(179.64deg,_#daf760_17.19%,_rgba(50,_216,_117,_0.96))] shadow-[0px_0px_40px_rgba(226,_255,_111,_0.8)] h-[438px] overflow-hidden text-21xl text-black">
          <img
            className="absolute h-[54.57%] w-[77.11%] top-[0%] right-[22.89%] bottom-[45.43%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.02] mix-blend-multiply"
            alt=""
            src={imageDimensions}
            style={frameIcon1Style}
          />
          <div
            className="absolute top-[281px] left-[calc(50%_-_52.35px)] flex flex-col items-center justify-center gap-[4px]"
            style={frameDiv2Style}
          >
            <b className="relative tracking-[-1.69px] leading-[50.63px]">
              0.04
            </b>
            <div className="relative text-5xl tracking-[-1.69px] opacity-[0.5]">
              Taker Fees
            </div>
          </div>
          <div
            className="absolute top-[148px] left-[calc(50%_-_56.35px)] flex flex-col items-center justify-center gap-[4px]"
            style={frameDiv3Style}
          >
            <b className="relative tracking-[-1.69px] leading-[50.63px]">
              0.02
            </b>
            <div className="relative text-5xl tracking-[-1.69px] opacity-[0.5]">
              Maker Fees
            </div>
          </div>
          <div
            className="absolute top-[52px] left-[calc(50%_-_100.35px)] shadow-[0px_0px_30px_#e2ff6f] flex flex-col items-start justify-start"
            style={frameDiv4Style}
          >
            <img
              className="relative w-[183.2px] h-11 overflow-hidden shrink-0"
              alt=""
              src="/frame3.svg"
            />
          </div>
          <img
            className="absolute h-[125.11%] w-[114.78%] top-[0%] right-[-14.78%] bottom-[-25.11%] left-[0%] max-w-full overflow-hidden max-h-full object-cover mix-blend-overlay"
            alt=""
            src={imageDimensionsText}
            style={textureIconStyle}
          />
        </div>
        <div className="flex-1 relative bg-neutrals-grey-9 h-[438px] overflow-hidden">
          <img
            className="absolute h-[54.57%] w-[77.11%] top-[0%] right-[22.89%] bottom-[45.43%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.1]"
            alt=""
            src={imageDimensionsText2}
            style={frameIcon2Style}
          />
          <div
            className="absolute top-[281px] left-[calc(50%_-_42.35px)] flex flex-col items-center justify-center"
            style={frameDiv5Style}
          >
            <b className="relative tracking-[-1.69px] leading-[50.63px]">
              0.05
            </b>
            <div className="relative text-xl tracking-[-1.69px] opacity-[0.5]">
              Taker Fees
            </div>
          </div>
          <div
            className="absolute top-[148px] left-[calc(50%_-_45.85px)] flex flex-col items-center justify-center"
            style={frameDiv6Style}
          >
            <b className="relative tracking-[-1.69px] leading-[50.63px]">
              0.02
            </b>
            <div className="relative text-xl tracking-[-1.69px] opacity-[0.5]">
              Maker Fees
            </div>
          </div>
          <img
            className="absolute top-[45px] left-[calc(50%_-_95.65px)] w-48 h-[61px] object-cover opacity-[0.7]"
            alt=""
            src={imageDimensionsText3}
            style={image93IconStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default TradeMorePayLessSection;
