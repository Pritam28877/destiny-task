import * as React from "react";
import { useMemo } from "react";

const SectionCardForm = ({ imageDimensions, propLeft, propLeft1 }) => {
  const textureIcon1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const textureIcon2Style = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-[117px] px-40 gap-[91px] text-center text-53xl text-white1 font-mobile-caption-1-medium">
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <b className="relative tracking-[-2.1px] leading-[76.88px]">
          Start Small. Earn Big.
        </b>
        <div className="relative text-[22.37px] leading-[32.85px] text-neutrals-grey-8 inline-block w-[659.1px]">
          Deposity a minimum of 1000 and get a Deposit bonus + dedicagted
          relationship manager
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-left text-21xl">
        <div className="flex-1 relative bg-whitesmoke h-[450px] overflow-hidden">
          <img
            className="absolute top-[52px] left-[43px] w-[190.9px] h-[119.2px]"
            alt=""
            src="/25-2.svg"
          />
          <div className="absolute top-[232px] left-[29px] w-[424px] flex flex-col items-start justify-start gap-[16.88px]">
            <b className="relative tracking-[-1.69px] leading-[50.63px] inline-block w-[175.5px]">
              <p className="m-0">Deposit</p>
              <p className="m-0">Bonus.</p>
            </b>
            <div className="self-stretch relative text-[15.75px] leading-[23.63px] text-neutrals-grey-61">
              Our assets' liquidity is unmatched in the market, with a small
              bid-ask spread and a well-balanced order book.
            </div>
          </div>
          <img
            className="absolute h-[144.89%] top-[0%] bottom-[-44.89%] left-[calc(50%_-_276.5px)] max-h-full w-[751px] object-cover mix-blend-overlay"
            alt=""
            src="/texture2@2x.png"
            style={textureIcon1Style}
          />
          <img
            className="absolute top-[0.5px] right-[0px] w-[304.2px] h-[273px] overflow-hidden opacity-[0.55] mix-blend-soft-light"
            alt=""
            src="/frame4.svg"
          />
        </div>
        <div className="flex-1 relative bg-whitesmoke h-[450px] overflow-hidden">
          <div className="absolute top-[232px] left-[29px] w-[446px] flex flex-col items-start justify-start gap-[16.88px]">
            <b className="self-stretch relative tracking-[-1.69px] leading-[50.63px]">
              <p className="m-0">Dedicated</p>
              <p className="m-0">Relationship Manager.</p>
            </b>
            <div className="self-stretch relative text-[15.75px] leading-[23.63px] text-neutrals-grey-61">
              Our assets' liquidity is unmatched in the market, with a small
              bid-ask spread and a well-balanced order book.
            </div>
          </div>
          <img
            className="absolute top-[54px] left-[48.8px] w-[158.2px] h-[104.8px]"
            alt=""
            src="/manager-1.svg"
          />
          <img
            className="absolute h-[154.22%] top-[0%] bottom-[-54.22%] left-[calc(50%_-_276.5px)] max-h-full w-[668px] object-cover mix-blend-overlay"
            alt=""
            src={imageDimensions}
            style={textureIcon2Style}
          />
          <img
            className="absolute top-[0.5px] right-[0px] w-[304.2px] h-[273px] overflow-hidden opacity-[0.55] mix-blend-soft-light"
            alt=""
            src="/frame4.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionCardForm;
