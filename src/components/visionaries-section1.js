import * as React from "react";
import { useMemo } from "react";

const VisionariesSection1 = ({
  texture,
  image95,
  texture1,
  image94,
  texture2,
  image96,
  propAlignSelf,
  propWidth,
  propHeight,
  propFlexShrink,
}) => {
  const frameDiv9Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      height: propHeight,
      flexShrink: propFlexShrink,
    };
  }, [propAlignSelf, propWidth, propHeight, propFlexShrink]);

  return (
    <div
      className="self-stretch bg-neutrals-grey-9 overflow-hidden flex flex-col items-center justify-start py-[140px] px-0 gap-[82px] text-center text-53xl text-white font-mobile-caption-1-medium"
      style={frameDiv9Style}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-[24px]">
          <b className="relative tracking-[-2.1px] leading-[76.88px] inline-block w-[775px]">
            <span>{`Meet the `}</span>
            <span className="text-electric-green-primary">Visionaries</span>
            <span> behind Density.</span>
          </b>
          <div className="relative text-5xl leading-[32.85px] text-neutrals-grey-4 text-left hidden">
            No Complexity of Trading Fee, generate volume and win
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[24px] text-left text-13xl">
        <div className="relative bg-neutrals-grey-8 w-[323px] h-[360px] overflow-hidden shrink-0">
          <img
            className="absolute top-[0px] left-[0px] w-[280px] h-[239px] overflow-hidden opacity-[0.55] mix-blend-multiply"
            alt=""
            src="/frame5.svg"
          />
          <b className="absolute top-[39.2px] left-[30px] tracking-[-1px] leading-[40px] inline-block w-[239px]">
            Aakash Neeraj Mittal
          </b>
          <div className="absolute top-[123.2px] left-[30px] text-xl tracking-[-1px] leading-[40px] text-neutrals-grey-6">
            CEO, Density
          </div>
          <img
            className="absolute h-[101.25%] w-full top-[0%] right-[0%] bottom-[-1.25%] left-[0%] max-w-full overflow-hidden max-h-full object-cover mix-blend-overlay"
            alt=""
            src={texture}
          />
          <img
            className="absolute top-[93.2px] left-[61px] w-[363px] h-[327px] object-cover"
            alt=""
            src={image95}
          />
          <img
            className="absolute top-[304.2px] left-[29px] w-8 h-8 overflow-hidden"
            alt=""
            src="/uillinkedin.svg"
          />
        </div>
        <div className="relative bg-neutrals-grey-8 w-[323px] h-[360px] overflow-hidden shrink-0">
          <img
            className="absolute top-[0px] left-[0px] w-[280px] h-[239px] overflow-hidden opacity-[0.55] mix-blend-multiply"
            alt=""
            src="/frame5.svg"
          />
          <b className="absolute top-[39.2px] left-[30px] tracking-[-1px] leading-[40px] inline-block w-[239px]">
            <p className="m-0">{`Bhupendra `}</p>
            <p className="m-0">Bule</p>
          </b>
          <div className="absolute top-[123.2px] left-[30px] text-xl tracking-[-1px] leading-[40px] text-neutrals-grey-6">
            CTO, Density
          </div>
          <img
            className="absolute h-[101.25%] w-full top-[0%] right-[0%] bottom-[-1.25%] left-[0%] max-w-full overflow-hidden max-h-full object-cover mix-blend-overlay"
            alt=""
            src={texture1}
          />
          <img
            className="absolute top-[109.2px] left-[108px] w-[315px] h-[315px] object-cover"
            alt=""
            src={image94}
          />
          <img
            className="absolute top-[304.2px] left-[29px] w-8 h-8 overflow-hidden"
            alt=""
            src="/uillinkedin.svg"
          />
        </div>
        <div className="relative bg-neutrals-grey-8 w-[323px] h-[360px] overflow-hidden shrink-0">
          <img
            className="absolute top-[0px] left-[0px] w-[280px] h-[239px] overflow-hidden opacity-[0.55] mix-blend-multiply"
            alt=""
            src="/frame5.svg"
          />
          <b className="absolute top-[39.2px] left-[30px] tracking-[-1px] leading-[40px] inline-block w-[239px]">
            <p className="m-0">Deepak</p>
            <p className="m-0">Vasman</p>
          </b>
          <div className="absolute top-[123.2px] left-[30px] text-xl tracking-[-1px] leading-[40px] text-neutrals-grey-6">
            CBO, Density
          </div>
          <img
            className="absolute h-[101.25%] w-full top-[0%] right-[0%] bottom-[-1.25%] left-[0%] max-w-full overflow-hidden max-h-full object-cover mix-blend-overlay"
            alt=""
            src={texture2}
          />
          <img
            className="absolute top-[117.2px] left-[91px] w-[292px] h-[266px] object-cover"
            alt=""
            src={image96}
          />
          <img
            className="absolute top-[304.2px] left-[29px] w-8 h-8 overflow-hidden"
            alt=""
            src="/uillinkedin.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionariesSection1;
