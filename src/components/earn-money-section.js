import * as React from "react";

const EarnMoneySection = ({ texture, texture1, texture2 }) => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[140px] px-0 gap-[82px] text-left text-53xl text-white font-mobile-caption-1-medium">
      <div className="flex flex-col items-center justify-center gap-[40px] text-center">
        <img
          className="relative w-[247.7px] h-[228.8px]"
          alt=""
          src="/group-1000003819.svg"
        />
        <div className="flex flex-col items-center justify-center gap-[24px]">
          <b className="relative tracking-[-2.1px] leading-[76.88px]">
            <span>{`Earn Money. `}</span>
            <span className="text-electric-green-primary">The Easy Way.</span>
          </b>
          <div className="relative text-5xl leading-[32.85px] text-neutrals-grey-4 text-left">
            No Complexity of Trading Fee, generate volume and win
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[15px] text-13xl">
        <div className="relative bg-neutrals-grey-9 w-[323px] h-[323px] overflow-hidden shrink-0">
          <img
            className="absolute top-[0px] left-[0px] w-[280px] h-[239px] overflow-hidden opacity-[0.55] mix-blend-multiply"
            alt=""
            src="/frame5.svg"
          />
          <b className="absolute bottom-[39px] left-[26px] tracking-[-1px] leading-[40px] inline-block w-[239px]">
            Share your your referral link
          </b>
          <img
            className="absolute top-[33px] left-[30px] w-[103.7px] h-[90.4px]"
            alt=""
            src="/group-626834.svg"
          />
          <img
            className="absolute h-[101.24%] w-full top-[0%] right-[0%] bottom-[-1.24%] left-[0%] max-w-full overflow-hidden max-h-full object-cover mix-blend-overlay"
            alt=""
            src={texture}
          />
        </div>
        <div className="relative bg-neutrals-grey-9 w-[323px] h-[323px] overflow-hidden shrink-0">
          <img
            className="absolute top-[0px] left-[0px] w-[280px] h-[239px] overflow-hidden opacity-[0.55] mix-blend-multiply"
            alt=""
            src="/frame5.svg"
          />
          <b className="absolute bottom-[39px] left-[26px] tracking-[-1px] leading-[40px] inline-block w-[264px]">
            Invite Friends to Trade on Density
          </b>
          <img
            className="absolute h-[29.78%] w-[33.62%] top-[11.15%] right-[56.66%] bottom-[59.07%] left-[9.72%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-1000003822.svg"
          />
          <img
            className="absolute h-[101.24%] w-full top-[0%] right-[0%] bottom-[-1.24%] left-[0%] max-w-full overflow-hidden max-h-full object-cover mix-blend-overlay"
            alt=""
            src={texture1}
          />
        </div>
        <div className="relative bg-neutrals-grey-9 w-[323px] h-[323px] overflow-hidden shrink-0">
          <img
            className="absolute top-[0px] left-[0px] w-[280px] h-[239px] overflow-hidden opacity-[0.55] mix-blend-multiply"
            alt=""
            src="/frame5.svg"
          />
          <b className="absolute bottom-[39px] left-[26px] tracking-[-1px] leading-[40px] inline-block w-[239px]">
            <p className="m-0">{`Trade `}</p>
            <p className="m-0">and Earn</p>
          </b>
          <img
            className="absolute h-[32.35%] w-[30.03%] top-[9.6%] right-[61.92%] bottom-[58.05%] left-[8.05%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-181459661.svg"
          />
          <img
            className="absolute h-[101.24%] w-full top-[0%] right-[0%] bottom-[-1.24%] left-[0%] max-w-full overflow-hidden max-h-full object-cover mix-blend-overlay"
            alt=""
            src={texture2}
          />
        </div>
      </div>
      <div className="rounded-lg [background:linear-gradient(85.85deg,_#d4f938_29.17%,_#32d875)] shadow-[0px_0px_16px_rgba(168,_239,_156,_0.8)] [backdrop-filter:blur(10px)] h-12 flex flex-row items-center justify-center py-6 px-12 box-border text-lg text-black">
        <b className="relative uppercase">start earning now</b>
      </div>
    </div>
  );
};

export default EarnMoneySection;
