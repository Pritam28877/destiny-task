import * as React from "react";

const ExploreTheMarketsSection = ({
  imageDimensions,
  carImageDimensions,
  imageDimensionsUrl,
}) => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[140px] px-0 gap-[64px] text-left text-53xl text-white font-mobile-caption-1-medium">
      <div className="flex flex-col items-center justify-start gap-[24px] text-center">
        <b className="relative tracking-[-2.1px] leading-[76.88px]">
          <p className="m-0">Explore the Markets</p>
          <p className="m-0">
            <span>{`like it is your `}</span>
            <span className="text-electric-green-primary">Playground.</span>
          </p>
        </b>
        <div className="relative text-5xl leading-[32.85px] text-neutrals-grey-4 inline-block w-[659.1px]">
          Search for your favorite coins and stay ahead of the market
        </div>
      </div>
      <div className="relative w-[1134.9px] h-[671.3px] text-sm text-neutrals-grey-91">
        <img
          className="absolute top-[368.3px] left-[3.9px] w-[1131px] h-[303px] object-cover"
          alt=""
          src={imageDimensions}
        />
        <img
          className="absolute top-[20.3px] left-[122.9px] w-[892.4px] h-[445.8px]"
          alt=""
          src="/chart.svg"
        />
        <img
          className="absolute top-[170.3px] left-[137.9px] w-[802px] h-[430px] opacity-[0.3] mix-blend-difference"
          alt=""
          src="/vector-1173.svg"
        />
        <img
          className="absolute top-[118.3px] left-[104.9px] w-[868px] h-[482px] opacity-[0.05] mix-blend-difference"
          alt=""
          src="/vector-1174.svg"
        />
        <div className="absolute top-[224.2px] left-[138px] flex flex-row items-start justify-start gap-[20px]">
          <div className="rounded-lg bg-neutrals-grey-2 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.5)] w-[270px] flex flex-col items-start justify-start pt-4 px-4 pb-2 box-border gap-[19px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-8 h-8 object-cover"
                  alt=""
                  src={carImageDimensions}
                />
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative tracking-[0.2px] leading-[20px] font-medium">
                    Bitcoin
                  </div>
                  <div className="relative text-xs tracking-[0.2px] leading-[17px] font-medium text-neutrals-grey-41">
                    BTC/USDT
                  </div>
                </div>
              </div>
              <img
                className="relative w-[74.3px] h-[28.3px]"
                alt=""
                src="/vector5.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-baseline justify-between text-3xs text-neutrals-grey-41">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.2px] leading-[15px] font-medium">
                  Price
                </div>
                <a
                  className="relative text-lg tracking-[0.2px] leading-[28px] font-medium text-neutrals-grey-91 [text-decoration:none]"
                  href="https://coinmarketcap.com/currencies/bitcoin/#markets"
                  target="_blank"
                >
                  $25,776.80
                </a>
              </div>
              <div className="flex flex-col items-end justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative tracking-[0.2px] leading-[15px] font-medium">
                    VOL
                  </div>
                  <div className="relative text-xs tracking-[0.2px] leading-[17px] font-medium text-neutrals-grey-91">
                    $8.5B
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative tracking-[0.2px] leading-[15px] font-medium">
                    CHG
                  </div>
                  <div className="relative text-xs tracking-[0.2px] leading-[17px] font-medium text-sematics-green">
                    23.1%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-neutrals-grey-2 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.5)] w-[270px] flex flex-col items-start justify-start pt-4 px-4 pb-2 box-border gap-[19px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-8 h-8"
                  alt=""
                  src="/group-626505.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative tracking-[0.2px] leading-[20px] font-medium">
                    Solana
                  </div>
                  <div className="relative text-xs tracking-[0.2px] leading-[17px] font-medium text-neutrals-grey-41">
                    SOL/USDT
                  </div>
                </div>
              </div>
              <img
                className="relative w-[74.3px] h-[33.9px]"
                alt=""
                src="/vector6.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-baseline justify-between text-3xs text-neutrals-grey-41">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.2px] leading-[15px] font-medium">
                  Price
                </div>
                <div className="relative text-lg tracking-[0.2px] leading-[28px] font-medium text-neutrals-grey-91">
                  $18.07
                </div>
              </div>
              <div className="flex flex-col items-end justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative tracking-[0.2px] leading-[15px] font-medium">
                    VOL
                  </div>
                  <div className="relative text-xs tracking-[0.2px] leading-[17px] font-medium text-neutrals-grey-91">
                    $372.8M
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative tracking-[0.2px] leading-[15px] font-medium">
                    CHG
                  </div>
                  <div className="relative text-xs tracking-[0.2px] leading-[17px] font-medium text-sematics-green">
                    02.1%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-neutrals-grey-2 shadow-[0px_0px_10px_rgba(255,_255,_255,_0.5)] w-[270px] flex flex-col items-start justify-start pt-4 px-4 pb-2 box-border gap-[19px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-8 h-8"
                  alt=""
                  src="/1421344023328.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[2px]">
                  <div className="relative tracking-[0.2px] leading-[20px] font-medium">
                    Ethereum
                  </div>
                  <div className="relative text-xs tracking-[0.2px] leading-[17px] font-medium text-neutrals-grey-41">
                    ETH/USDT
                  </div>
                </div>
              </div>
              <img
                className="relative w-[74.3px] h-[28.3px]"
                alt=""
                src="/vector5.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-baseline justify-between text-3xs text-neutrals-grey-41">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.2px] leading-[15px] font-medium">
                  Price
                </div>
                <a
                  className="relative text-lg tracking-[0.2px] leading-[28px] font-medium text-neutrals-grey-91 [text-decoration:none]"
                  href="https://coinmarketcap.com/currencies/ethereum/#markets"
                  target="_blank"
                >
                  $1,607.11
                </a>
              </div>
              <div className="flex flex-col items-end justify-start gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative tracking-[0.2px] leading-[15px] font-medium">
                    VOL
                  </div>
                  <div className="relative text-xs tracking-[0.2px] leading-[17px] font-medium text-neutrals-grey-91">
                    $4.6B
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative tracking-[0.2px] leading-[15px] font-medium">
                    CHG
                  </div>
                  <div className="relative text-xs tracking-[0.2px] leading-[17px] font-medium text-sematics-green">
                    12.1%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute h-[97.12%] top-[0%] bottom-[2.88%] left-[calc(50%_-_567.45px)] max-h-full w-[1087px] object-cover mix-blend-overlay"
          alt=""
          src={imageDimensionsUrl}
        />
      </div>
      <div className="rounded-lg [background:linear-gradient(85.85deg,_#d4f938_29.17%,_#32d875)] shadow-[0px_0px_16px_rgba(168,_239,_156,_0.8)] [backdrop-filter:blur(10px)] h-12 flex flex-row items-center justify-center py-6 px-12 box-border text-lg text-black">
        <b className="relative uppercase">Explore Markets</b>
      </div>
    </div>
  );
};

export default ExploreTheMarketsSection;
