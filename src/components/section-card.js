import * as React from "react";

const SectionCard = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center py-[120px] px-0 gap-[120px] text-center text-53xl text-white font-mobile-caption-1-medium">
      <b className="relative tracking-[-0.02em] leading-[80px] inline-block w-[936px] [text-shadow:0px_0px_4px_rgba(0,_0,_0,_0.25)]">
        <p className="m-0">Derivates made simple</p>
        <p className="m-0">
          <span>{`in `}</span>
          <span className="text-electric-green-primary">3 Easy</span>
          <span className="text-white"> Steps</span>
        </p>
      </b>
      <div className="flex flex-col items-center justify-center gap-[40px] text-left text-21xl">
        <div className="w-[1442px] flex flex-row items-center justify-center">
          <img
            className="relative w-[646px] h-[646px]"
            alt=""
            src="/group-626793.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <img
              className="relative w-[119.6px] h-[120px]"
              alt=""
              src="/group-1000003801.svg"
            />
            <div className="flex flex-col items-start justify-center gap-[36px]">
              <div className="flex flex-col items-start justify-center gap-[16px]">
                <div className="relative font-medium">Create an Account</div>
                <div className="relative text-5xl leading-[32px] text-darkgray inline-block w-96">{`Register & Complete your Verification in less than 2 minutes`}</div>
              </div>
              <div className="rounded-lg [background:linear-gradient(85.85deg,_#d4f938_29.17%,_#32d875)] shadow-[0px_0px_16px_rgba(168,_239,_156,_0.8)] [backdrop-filter:blur(10px)] w-[216px] h-12 flex flex-row items-center justify-center py-6 px-12 box-border text-lg text-black">
                <b className="relative uppercase">Trade Now</b>
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative w-[1134px] h-px opacity-[0.4]"
          alt=""
          src="/vector-5.svg"
        />
        <div className="w-[1446px] flex flex-row items-center justify-center">
          <img
            className="relative w-[646px] h-[646px]"
            alt=""
            src="/group-626794.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <img
              className="relative w-[107.1px] h-[100px]"
              alt=""
              src="/group-626789.svg"
            />
            <div className="flex flex-col items-start justify-center gap-[36px]">
              <div className="flex flex-col items-start justify-center gap-[16px]">
                <div className="relative font-medium">Deposit Funds</div>
                <div className="relative text-5xl leading-[32px] text-darkgray inline-block w-96">
                  Add funds quickly using a variety of payment methods
                </div>
              </div>
              <div className="rounded-lg [background:linear-gradient(85.85deg,_#d4f938_29.17%,_#32d875)] shadow-[0px_0px_16px_rgba(168,_239,_156,_0.8)] [backdrop-filter:blur(10px)] w-[216px] h-12 flex flex-row items-center justify-center py-6 px-12 box-border text-lg text-black">
                <b className="relative uppercase">Trade Now</b>
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative w-[1134px] h-px opacity-[0.4]"
          alt=""
          src="/vector-6.svg"
        />
        <div className="w-[1442px] flex flex-row items-center justify-center">
          <img
            className="relative w-[646px] h-[646px]"
            alt=""
            src="/group-6267941.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <img
              className="relative w-[115.8px] h-[120px]"
              alt=""
              src="/group-1000003802.svg"
            />
            <div className="flex flex-col items-start justify-center gap-[36px]">
              <div className="flex flex-col items-start justify-center gap-[16px]">
                <div className="relative font-medium">Become a Trader</div>
                <div className="relative text-5xl leading-[32px] text-darkgray inline-block w-96">{`Choose Your Trading Pair & Trade Seamlessly`}</div>
              </div>
              <div className="rounded-lg [background:linear-gradient(85.85deg,_#d4f938_29.17%,_#32d875)] shadow-[0px_0px_16px_rgba(168,_239,_156,_0.8)] [backdrop-filter:blur(10px)] w-[216px] h-12 flex flex-row items-center justify-center py-6 px-12 box-border text-lg text-black">
                <b className="relative uppercase">Trade Now</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
